import { IRouteInfo, IRouteRequest } from './types';
import * as mantle from '@mantleio/sdk';
import * as interfaces_1 from '@mantleio/sdk/dist/interfaces';
const contracts_1 = require('@mantleio/contracts');
import { CrossChainMessenger } from '@mantleio/sdk';
import { ethers, Signer } from 'ethers';

export default class swap {
  private crossChainMessenger: CrossChainMessenger | undefined;
  constructor() {
    this.crossChainMessenger = undefined;
  }

  async getRoutes(
    data: IRouteRequest,
    signer: Signer,
    rpcUrl: string,
    switchChainHook: (requiredChainId: number) => Promise<Signer | undefined>
  ) {
    await this.setup(data, signer, rpcUrl);

    if (data.fromToken.chainId === 5001) {
      await this.withdrawBIT(data, switchChainHook);
    } else {
      await this.depositBIT(data);
    }
  }

  private setup = async (
    data: IRouteRequest,
    signer: Signer,
    rpcUrl: string
  ) => {
    const RpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const Wallet = RpcProvider.getSigner(data.address);

    this.crossChainMessenger = new mantle.CrossChainMessenger({
      l1ChainId:
        data.fromToken.chainId === 5001
          ? data.toToken.chainId
          : data.fromToken.chainId,
      l2ChainId: 5001,
      l1SignerOrProvider: data.fromToken.chainId === 5001 ? Wallet : signer,
      l2SignerOrProvider: data.fromToken.chainId === 5001 ? signer : Wallet,
    });
  };

  private depositBIT = async (data: IRouteRequest) => {
    const allowanceResponse = await this.crossChainMessenger?.approveERC20(
      data.fromToken.address,
      data.toToken.address,
      data.amount
    );
    await allowanceResponse?.wait();
    const response = await this.crossChainMessenger?.depositERC20(
      data.fromToken.address,
      data.toToken.address,
      data.amount
    );
    await response?.wait();

    await this.crossChainMessenger?.waitForMessageStatus(
      response?.hash!,
      mantle.MessageStatus.RELAYED
    );
  };

  private withdrawBIT = async (
    data: IRouteRequest,
    switchChainHook: (requiredChainId: number) => Promise<Signer | undefined>
  ) => {
    // const response = await this.crossChainMessenger?.withdrawERC20(
    //   data.toToken.address,
    //   data.fromToken.address,
    //   data.amount
    // );
    // await response?.wait();

    // console.log(response);

    // await this.crossChainMessenger?.waitForMessageStatus(
    //   response?.hash!,
    //   mantle.MessageStatus.IN_CHALLENGE_PERIOD
    // );

    // console.log(response);

    // await this.crossChainMessenger?.waitForMessageStatus(
    //   response?.hash!,
    //   mantle.MessageStatus.READY_FOR_RELAY
    // );
    const l1Signer = await switchChainHook(data.toToken.chainId);

    console.log(l1Signer);

    // console.log(response);

    // const resolved = await this.crossChainMessenger?.toCrossChainMessage(
    //   response!
    // );
    // console.log(resolved);
    // if (resolved?.direction === interfaces_1.MessageDirection.L1_TO_L2) {
    //   throw new Error(`cannot finalize L1 to L2 message`);
    // }
    // console.log(resolved);
    // const proof = await this.crossChainMessenger?.getMessageProof(resolved!);
    // console.log(proof);

    // const legacyL1XDM = new ethers.Contract(
    //   this.crossChainMessenger?.contracts.l1.L1CrossDomainMessenger.address!,
    //   contracts_1.getContractInterface('L1CrossDomainMessenger'),
    //   this.crossChainMessenger?.l1SignerOrProvider
    // );

    // //@ts-ignore
    // await legacyL1XDM.populateTransaction.relayMessage(
    //   resolved?.target,
    //   resolved?.sender,
    //   resolved?.message,
    //   resolved?.messageNonce,
    //   proof,
    //   {}
    // );

    // if (!l1Signer) return;

    // await this.crossChainMessenger?.finalizeMessage(response!, {
    //   signer: l1Signer,
    //   overrides: { gasLimit: 3000000000 },
    // });
    // console.log(response);

    // await this.crossChainMessenger?.waitForMessageStatus(
    //   response!,
    //   mantle.MessageStatus.RELAYED
    // );
    // console.log(response);
  };
}
