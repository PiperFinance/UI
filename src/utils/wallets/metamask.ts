import {
  Chain,
  ConnectorNotFoundError,
  ResourceUnavailableError,
  RpcError,
  UserRejectedRequestError,
  SwitchChainNotSupportedError,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { hexValue } from "@ethersproject/bytes";

export type InjectedConnectorOptions = {
  /** Name of connector */
  name?: string | ((detectedName: string | string[]) => string);
  /**
   * [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) Ethereum Provider to target
   *
   * @default
   * () => typeof window !== 'undefined' ? window.ethereum : undefined
   */
  getProvider?: () => Window["ethereum"] | undefined;
  /**
   * MetaMask 10.9.3 emits disconnect event when chain is changed.
   * This flag prevents the `"disconnect"` event from being emitted upon switching chains. See [GitHub issue](https://github.com/MetaMask/metamask-extension/issues/13375#issuecomment-1027663334) for more info.
   */
  shimChainChangedDisconnect?: boolean;
  /**
   * MetaMask and other injected providers do not support programmatic disconnect.
   * This flag simulates the disconnect behavior by keeping track of connection status in storage. See [GitHub issue](https://github.com/MetaMask/metamask-extension/issues/10353) for more info.
   * @default true
   */
  shimDisconnect?: boolean;
};
const mappingNetwork: Record<number, string> = {
  1: "eth-mainnet",
  56: "bsc-mainnet",
  97: "bsc-testnet",
};

export class MetaMaskConnector extends InjectedConnector {
  readonly id = "bsc";

  readonly ready = typeof window !== "undefined";

  provider?: Window["ethereum"];

  constructor({
    chains: _chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: InjectedConnectorOptions;
  } = {}) {
    const options = {
      name: "MetaMask",
      shimDisconnect: false,
      shimChainChangedDisconnect: true,
    };
    const chains = _chains?.filter((c) => !!mappingNetwork[c.id]);
    super({
      chains,
      options,
    });
  }

  async connect({ chainId }: { chainId?: number } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider) throw new ConnectorNotFoundError();

      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }

      this.emit("message", { type: "connecting" });

      const account = await this.getAccount();
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }

      return { account, chain: { id, unsupported }, provider };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
      if ((<RpcError>error).code === -32002)
        throw new ResourceUnavailableError(error);
      throw error;
    }
  }

  async getProvider() {
    function getReady(ethereum?: any) {
      const isMetaMask = !!ethereum?.isMetaMask;
      if (!isMetaMask) return;
      // Brave tries to make itself look like MetaMask
      // Could also try RPC `web3_clientVersion` if following is unreliable
      if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state)
        return;
      if (ethereum.isAvalanche) return;
      if (ethereum.isKuCoinWallet) return;
      if (ethereum.isPortal) return;
      if (ethereum.isTokenPocket) return;
      if (ethereum.isTokenary) return;
      return ethereum;
    }

    if (typeof window === "undefined") return;
    if (window.ethereum?.providers)
      return window.ethereum.providers.find(getReady);
    return getReady(window.ethereum);
  }

  async switchChain(chainId: number): Promise<Chain> {
    const provider = await this.getProvider();
    if (!provider) throw new ConnectorNotFoundError();

    const id = hexValue(chainId);

    if (mappingNetwork[chainId]) {
      try {
        await provider.switchNetwork?.(mappingNetwork[chainId]);

        return (
          this.chains.find((x) => x.id === chainId) ?? {
            id: chainId,
            name: `Chain ${id}`,
            network: `${id}`,
            rpcUrls: { default: "" },
          }
        );
      } catch (error) {
        if ((error as any).error === "user rejected") {
          throw new UserRejectedRequestError(error);
        }
      }
    }
    throw new SwitchChainNotSupportedError({ connector: this });
  }
}
