import { Chain } from "wagmi";
import eth from "@assets/networks/eth.webp";
import fantom from "@assets/networks/fantom.webp";
import bsc from "@assets/networks/bsc.webp";
import gnosis from "@assets/networks/gnosis.webp";
import aurora from "@assets/networks/aurora.webp";
import avalache from "@assets/networks/avalache.webp";
import optimism from "@assets/networks/optimism.webp";
import polygon from "@assets/networks/polygon.webp";
import arbitrum from "@assets/networks/arbitrum.webp";
import { StaticImageData } from "next/image";

export const chainIcon = [
  {
    icon: eth,
    chainId: 1,
    name: "Ethereum",
  },
  {
    icon: fantom,
    chainId: 250,
    name: "Fantom",
  },
  {
    icon: bsc,
    chainId: 56,
    name: "BSC",
  },
  {
    icon: gnosis,
    chainId: 100,
    name: "Gnosis",
  },
  {
    icon: aurora,
    chainId: 1313161554,
    name: "Aurora",
  },
  {
    icon: avalache,
    chainId: 43114,
    name: "Avax",
  },
  {
    icon: optimism,
    chainId: 10,
    name: "Optimism",
  },
  {
    icon: polygon,
    chainId: 137,
    name: "Polygon",
  },
  {
    icon: arbitrum,
    chainId: 42161,
    name: "Arbitrum",
  },
];

export const allCustomChains: Chain[] = [
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 1,
    name: "ETH",
    network: "Ethereum Mainnet",
    rpcUrls: {
      infura: "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
      default: "https://cloudflare-eth.com",
      public: "https://cloudflare-eth.com",
    },
    ens: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "etherscan", url: "https://etherscan.io" },
      public: { name: "etherscan", url: "https://etherscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Expanse Network Ether",
      symbol: "EXP",
      decimals: 18,
    },
    id: 2,
    name: "EXP",
    network: "Expanse Network",
    rpcUrls: {
      default: "https://node.expanse.tech",
      public: "https://node.expanse.tech",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ThaiChain Ether", symbol: "TCH", decimals: 18 },
    id: 7,
    name: "TCH",
    network: "ThaiChain",
    rpcUrls: {
      default: "https://rpc.dome.cloud",
      public: "https://rpc.dome.cloud",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ubiq Ether", symbol: "UBQ", decimals: 18 },
    id: 8,
    name: "UBQ",
    network: "Ubiq",
    rpcUrls: {
      default: "https://pyrus2.ubiqscan.io",
      public: "https://pyrus2.ubiqscan.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "ubiqscan", url: "https://ubiqscan.io" },
      public: { name: "ubiqscan", url: "https://ubiqscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 10,
    name: "ETH",
    network: "Optimism",
    rpcUrls: {
      default: "https://mainnet.optimism.io/",
      public: "https://mainnet.optimism.io/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "etherscan", url: "https://optimistic.etherscan.io" },
      public: { name: "etherscan", url: "https://optimistic.etherscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Metadium Mainnet Ether",
      symbol: "META",
      decimals: 18,
    },
    id: 11,
    name: "META",
    network: "Metadium Mainnet",
    rpcUrls: {
      default: "https://api.metadium.com/prod",
      public: "https://api.metadium.com/prod",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Flare", symbol: "FLR", decimals: 18 },
    id: 14,
    name: "FLR",
    network: "Flare Mainnet",
    rpcUrls: {
      default: "https://flare-api.flare.network/ext/C/rpc",
      public: "https://flare-api.flare.network/ext/C/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://flare-explorer.flare.network",
      },
      public: {
        name: "blockscout",
        url: "https://flare-explorer.flare.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Diodes", symbol: "DIODE", decimals: 18 },
    id: 15,
    name: "DIODE",
    network: "Diode Prenet",
    rpcUrls: {
      default: "https://prenet.diode.io:8443/",
      public: "https://prenet.diode.io:8443/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Thaifi Ether", symbol: "TFI", decimals: 18 },
    id: 17,
    name: "TCH",
    network: "ThaiChain 2.0 ThaiFi",
    rpcUrls: {
      default: "https://rpc.thaifi.com",
      public: "https://rpc.thaifi.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Songbird", symbol: "SGB", decimals: 18 },
    id: 19,
    name: "SGB",
    network: "Songbird Canary-Network",
    rpcUrls: {
      default: "https://sgb-rpc.ftso.eu",
      public: "https://sgb-rpc.ftso.eu",
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://songbird-explorer.flare.network",
      },
      public: {
        name: "blockscout",
        url: "https://songbird-explorer.flare.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Elastos", symbol: "ELA", decimals: 18 },
    id: 20,
    name: "ETH",
    network: "Elastos Smart Chain",
    rpcUrls: {
      default: "https://api.elastos.io/eth",
      public: "https://api.elastos.io/eth",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "elastos esc explorer", url: "https://esc.elastos.io" },
      public: { name: "elastos esc explorer", url: "https://esc.elastos.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KardiaChain", symbol: "KAI", decimals: 18 },
    id: 24,
    name: "KAI",
    network: "KardiaChain Mainnet",
    rpcUrls: {
      default: "https://rpc.kardiachain.io",
      public: "https://rpc.kardiachain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Cronos", symbol: "CRO", decimals: 18 },
    id: 25,
    name: "CRO",
    network: "Cronos Mainnet Beta",
    rpcUrls: {
      default: "https://evm.cronos.org",
      public: "https://evm.cronos.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Cronos Explorer", url: "https://cronoscan.com" },
      public: { name: "Cronos Explorer", url: "https://cronoscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "SHIBA INU COIN", symbol: "SHIB", decimals: 18 },
    id: 27,
    name: "SHIB",
    network: "ShibaChain",
    rpcUrls: {
      default: "https://rpc.shibachain.net",
      public: "https://rpc.shibachain.net",
    },
    blockExplorers: {
      default: { name: "Shiba Explorer", url: "https://exp.shibachain.net" },
      public: { name: "Shiba Explorer", url: "https://exp.shibachain.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "L1 coin", symbol: "L1", decimals: 18 },
    id: 29,
    name: "genesis",
    network: "Genesis L1",
    rpcUrls: {
      default: "https://rpc.genesisl1.org",
      public: "https://rpc.genesisl1.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Genesis L1 blockchain explorer",
        url: "https://explorer.genesisl1.org",
      },
      public: {
        name: "Genesis L1 blockchain explorer",
        url: "https://explorer.genesisl1.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Smart Bitcoin", symbol: "RBTC", decimals: 18 },
    id: 30,
    name: "RSK",
    network: "RSK Mainnet",
    rpcUrls: {
      default: "https://mycrypto.rsk.co",
      public: "https://mycrypto.rsk.co",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "RSK Explorer", url: "https://explorer.rsk.co" },
      public: { name: "RSK Explorer", url: "https://explorer.rsk.co" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "GoodData Mainnet Ether",
      symbol: "GooD",
      decimals: 18,
    },
    id: 33,
    name: "GooD",
    network: "GoodData Mainnet",
    rpcUrls: {
      default: "https://rpc.goodata.io",
      public: "https://rpc.goodata.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TBWG Ether", symbol: "TBG", decimals: 18 },
    id: 35,
    name: "TBWG",
    network: "TBWG Chain",
    rpcUrls: { default: "https://rpc.tbwg.io", public: "https://rpc.tbwg.io" },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Dxchain", symbol: "DX", decimals: 18 },
    id: 36,
    name: "Dxchain",
    network: "Dxchain Mainnet",
    rpcUrls: {
      default: "https://mainnet.dxchain.com",
      public: "https://mainnet.dxchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "dxscan", url: "https://dxscan.io" },
      public: { name: "dxscan", url: "https://dxscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "SeedCoin", symbol: "SEED", decimals: 18 },
    id: 37,
    name: "SeedCoin-Network",
    network: "SeedCoin-Network",
    rpcUrls: {
      default: "https://node.seedcoin.network",
      public: "https://node.seedcoin.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Valorbit", symbol: "VAL", decimals: 18 },
    id: 38,
    name: "VAL",
    network: "Valorbit",
    rpcUrls: {
      default: "https://rpc.valorbit.com/v2",
      public: "https://rpc.valorbit.com/v2",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
    id: 40,
    name: "TLOS",
    network: "Telos EVM Mainnet",
    rpcUrls: {
      default: "https://mainnet.telos.net/evm",
      public: "https://mainnet.telos.net/evm",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "teloscan", url: "https://teloscan.io" },
      public: { name: "teloscan", url: "https://teloscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Crab Network Native Token",
      symbol: "CRAB",
      decimals: 18,
    },
    id: 44,
    name: "crab",
    network: "Darwinia Crab Network",
    rpcUrls: {
      default: "https://crab-rpc.darwinia.network",
      public: "https://crab-rpc.darwinia.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "subscan", url: "https://crab.subscan.io" },
      public: { name: "subscan", url: "https://crab.subscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Darwinia Network Native Token",
      symbol: "RING",
      decimals: 18,
    },
    id: 46,
    name: "darwinia",
    network: "Darwinia Network",
    rpcUrls: {
      default: "https://rpc.darwinia.network",
      public: "https://rpc.darwinia.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "subscan", url: "https://darwinia.subscan.io" },
      public: { name: "subscan", url: "https://darwinia.subscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "XinFin", symbol: "XDC", decimals: 18 },
    id: 50,
    name: "XDC",
    network: "XinFin XDC Network",
    rpcUrls: {
      default: "https://rpc1.xinfin.network",
      public: "https://rpc1.xinfin.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "xdcscan", url: "https://xdcscan.io" },
      public: { name: "xdcscan", url: "https://xdcscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "XinFin", symbol: "TXDC", decimals: 18 },
    id: 51,
    name: "XDC",
    network: "XDC Apothem Network",
    rpcUrls: {
      default: "https://erpc.apothem.network",
      public: "https://erpc.apothem.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "xdcscan", url: "https://apothem.xinfinscan.com" },
      public: { name: "xdcscan", url: "https://apothem.xinfinscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "CoinEx Chain Native Token",
      symbol: "cet",
      decimals: 18,
    },
    id: 52,
    name: "CSC",
    network: "CoinEx Smart Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.coinex.net",
      public: "https://rpc.coinex.net",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "coinexscan", url: "https://www.coinex.net" },
      public: { name: "coinexscan", url: "https://www.coinex.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Belly", symbol: "BELLY", decimals: 18 },
    id: 54,
    name: "OPENPIECE",
    network: "Openpiece Mainnet",
    rpcUrls: {
      default: "https://mainnet.openpiece.io",
      public: "https://mainnet.openpiece.io",
    },
    blockExplorers: {
      default: { name: "Belly Scan", url: "https://bellyscan.com" },
      public: { name: "Belly Scan", url: "https://bellyscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Zyx", symbol: "ZYX", decimals: 18 },
    id: 55,
    name: "ZYX",
    network: "Zyx Mainnet",
    rpcUrls: {
      default: "https://rpc-6.zyx.network/",
      public: "https://rpc-6.zyx.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "zyxscan", url: "https://zyxscan.com" },
      public: { name: "zyxscan", url: "https://zyxscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    id: 56,
    name: "BSC",
    network: "Binance Smart Chain Mainnet",
    rpcUrls: {
      default: "https://bsc-dataseed4.ninicoin.io",
      public: "https://bsc-dataseed4.ninicoin.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "bscscan", url: "https://bscscan.com" },
      public: { name: "bscscan", url: "https://bscscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Syscoin", symbol: "SYS", decimals: 18 },
    id: 57,
    name: "SYS",
    network: "Syscoin Mainnet",
    rpcUrls: {
      default: "https://rpc.syscoin.org",
      public: "https://rpc.syscoin.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Syscoin Block Explorer",
        url: "https://explorer.syscoin.org",
      },
      public: {
        name: "Syscoin Block Explorer",
        url: "https://explorer.syscoin.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONG", symbol: "ONG", decimals: 18 },
    id: 58,
    name: "Ontology",
    network: "Ontology Mainnet",
    rpcUrls: {
      default: "https://dappnode4.ont.io:10339",
      public: "https://dappnode4.ont.io:10339",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.ont.io" },
      public: { name: "explorer", url: "https://explorer.ont.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EOS", symbol: "EOS", decimals: 18 },
    id: 59,
    name: "EOS",
    network: "EOS Mainnet",
    rpcUrls: {
      default: "https://api.eosargentina.io",
      public: "https://api.eosargentina.io",
    },
    blockExplorers: {
      default: { name: "bloks", url: "https://bloks.eosargentina.io" },
      public: { name: "bloks", url: "https://bloks.eosargentina.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "GoChain Ether", symbol: "GO", decimals: 18 },
    id: 60,
    name: "GO",
    network: "GoChain",
    rpcUrls: {
      default: "https://rpc.gochain.io",
      public: "https://rpc.gochain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "GoChain Explorer", url: "https://explorer.gochain.io" },
      public: { name: "GoChain Explorer", url: "https://explorer.gochain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Ethereum Classic Ether",
      symbol: "ETC",
      decimals: 18,
    },
    id: 61,
    name: "ETC",
    network: "Ethereum Classic Mainnet",
    rpcUrls: {
      default: "https://www.ethercluster.com/etc",
      public: "https://www.ethercluster.com/etc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://blockscout.com/etc/mainnet",
      },
      public: { name: "blockscout", url: "https://blockscout.com/etc/mainnet" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ellaism Ether", symbol: "ELLA", decimals: 18 },
    id: 64,
    name: "ELLA",
    network: "Ellaism",
    rpcUrls: {
      default: "https://jsonrpc.ellaism.org",
      public: "https://jsonrpc.ellaism.org",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "OKXChain Global Utility Token",
      symbol: "OKT",
      decimals: 18,
    },
    id: 66,
    name: "okxchain",
    network: "OKXChain Mainnet",
    rpcUrls: {
      default:
        "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff",
      public:
        "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff",
    },
    blockExplorers: {
      default: { name: "OKLink", url: "https://www.oklink.com/en/okc" },
      public: { name: "OKLink", url: "https://www.oklink.com/en/okc" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "SoterOne Mainnet Ether",
      symbol: "SOTER",
      decimals: 18,
    },
    id: 68,
    name: "SOTER",
    network: "SoterOne Mainnet",
    rpcUrls: {
      default: "https://rpc.soter.one",
      public: "https://rpc.soter.one",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Hoo Smart Chain Native Token",
      symbol: "HOO",
      decimals: 18,
    },
    id: 70,
    name: "HSC",
    network: "Hoo Smart Chain",
    rpcUrls: {
      default: "https://http-mainnet2.hoosmartchain.com",
      public: "https://http-mainnet2.hoosmartchain.com",
    },
    blockExplorers: {
      default: { name: "hooscan", url: "https://www.hooscan.com" },
      public: { name: "hooscan", url: "https://www.hooscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EIDI", symbol: "EIDI", decimals: 18 },
    id: 74,
    name: "IDChain",
    network: "IDChain Mainnet",
    rpcUrls: {
      default: "https://idchain.one/rpc/",
      public: "https://idchain.one/rpc/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.idchain.one" },
      public: { name: "explorer", url: "https://explorer.idchain.one" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Mix Ether", symbol: "MIX", decimals: 18 },
    id: 76,
    name: "MIX",
    network: "Mix",
    rpcUrls: {
      default: "https://rpc2.mix-blockchain.org:8647",
      public: "https://rpc2.mix-blockchain.org:8647",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "POA Sokol Ether", symbol: "SPOA", decimals: 18 },
    id: 77,
    name: "POA",
    network: "POA Network Sokol",
    rpcUrls: {
      default: "https://sokol.poa.network",
      public: "https://sokol.poa.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://blockscout.com/poa/sokol" },
      public: { name: "blockscout", url: "https://blockscout.com/poa/sokol" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Primus Ether", symbol: "PETH", decimals: 18 },
    id: 78,
    name: "PC",
    network: "PrimusChain mainnet",
    rpcUrls: {
      default: "https://ethnode.primusmoney.com/mainnet",
      public: "https://ethnode.primusmoney.com/mainnet",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ZENITH", symbol: "ZENITH", decimals: 18 },
    id: 79,
    name: "Zenith",
    network: "Zenith Mainnet",
    rpcUrls: {
      default: "https://dataserver-asia-7.zenithchain.co/",
      public: "https://dataserver-asia-7.zenithchain.co/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "zenith scan", url: "https://scan.zenithchain.co" },
      public: { name: "zenith scan", url: "https://scan.zenithchain.co" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "RNA", symbol: "RNA", decimals: 18 },
    id: 80,
    name: "GeneChain",
    network: "GeneChain",
    rpcUrls: {
      default: "https://rpc.genechain.io",
      public: "https://rpc.genechain.io",
    },
    blockExplorers: {
      default: { name: "GeneChain Scan", url: "https://scan.genechain.io" },
      public: { name: "GeneChain Scan", url: "https://scan.genechain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Meter", symbol: "MTR", decimals: 18 },
    id: 82,
    name: "METER",
    network: "Meter Mainnet",
    rpcUrls: {
      default: "https://rpc.meter.io",
      public: "https://rpc.meter.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Meter Mainnet Scan", url: "https://scan.meter.io" },
      public: { name: "Meter Mainnet Scan", url: "https://scan.meter.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "GateToken", symbol: "GT", decimals: 18 },
    id: 86,
    name: "GT",
    network: "GateChain Mainnet",
    rpcUrls: {
      default: "https://evm.gatenode.cc",
      public: "https://evm.gatenode.cc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "GateScan", url: "https://www.gatescan.org" },
      public: { name: "GateScan", url: "https://www.gatescan.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Supernova", symbol: "SNT", decimals: 18 },
    id: 87,
    name: "NNW",
    network: "Nova Network",
    rpcUrls: {
      default: "https://rpc.novanetwork.io:9070",
      public: "https://rpc.novanetwork.io:9070",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "novanetwork", url: "https://explorer.novanetwork.io" },
      public: { name: "novanetwork", url: "https://explorer.novanetwork.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TomoChain", symbol: "TOMO", decimals: 18 },
    id: 88,
    name: "TOMO",
    network: "TomoChain",
    rpcUrls: {
      default: "https://rpc.tomochain.com",
      public: "https://rpc.tomochain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Garizon", symbol: "GAR", decimals: 18 },
    id: 90,
    name: "GAR",
    network: "Garizon Stage0",
    rpcUrls: {
      default: "https://s0.garizon.net/rpc",
      public: "https://s0.garizon.net/rpc",
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.garizon.com" },
      public: { name: "explorer", url: "https://explorer.garizon.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Garizon", symbol: "GAR", decimals: 18 },
    id: 91,
    name: "GAR",
    network: "Garizon Stage1",
    rpcUrls: {
      default: "https://s1.garizon.net/rpc",
      public: "https://s1.garizon.net/rpc",
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.garizon.com" },
      public: { name: "explorer", url: "https://explorer.garizon.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Garizon", symbol: "GAR", decimals: 18 },
    id: 92,
    name: "GAR",
    network: "Garizon Stage2",
    rpcUrls: {
      default: "https://s2.garizon.net/rpc",
      public: "https://s2.garizon.net/rpc",
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.garizon.com" },
      public: { name: "explorer", url: "https://explorer.garizon.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Garizon", symbol: "GAR", decimals: 18 },
    id: 93,
    name: "GAR",
    network: "Garizon Stage3",
    rpcUrls: {
      default: "https://s3.garizon.net/rpc",
      public: "https://s3.garizon.net/rpc",
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.garizon.com" },
      public: { name: "explorer", url: "https://explorer.garizon.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "NEXT", symbol: "NEXT", decimals: 18 },
    id: 96,
    name: "NSC",
    network: "NEXT Smart Chain",
    rpcUrls: {
      default: "https://rpc.nextsmartchain.com",
      public: "https://rpc.nextsmartchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Next Smart Chain Explorer",
        url: "https://explorer.nextsmartchain.com",
      },
      public: {
        name: "Next Smart Chain Explorer",
        url: "https://explorer.nextsmartchain.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "POA Network Core Ether",
      symbol: "POA",
      decimals: 18,
    },
    id: 99,
    name: "POA",
    network: "POA Network Core",
    rpcUrls: {
      default: "https://core.poa.network",
      public: "https://core.poa.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://blockscout.com/poa/core" },
      public: { name: "blockscout", url: "https://blockscout.com/poa/core" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
    id: 100,
    name: "GNO",
    network: "Gnosis",
    rpcUrls: {
      default: "https://gnosis-mainnet.public.blastapi.io",
      public: "https://gnosis-mainnet.public.blastapi.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "gnosisscan", url: "https://gnosisscan.io" },
      public: { name: "gnosisscan", url: "https://gnosisscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EtherInc Ether", symbol: "ETI", decimals: 18 },
    id: 101,
    name: "ETI",
    network: "EtherInc",
    rpcUrls: {
      default: "https://api.einc.io/jsonrpc/mainnet",
      public: "https://api.einc.io/jsonrpc/mainnet",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Web3Games", symbol: "W3G", decimals: 18 },
    id: 105,
    name: "Web3Games",
    network: "Web3Games Devnet",
    rpcUrls: {
      default: "https://devnet.web3games.org/evm",
      public: "https://devnet.web3games.org/evm",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Web3Games Explorer",
        url: "https://explorer-devnet.web3games.org",
      },
      public: {
        name: "Web3Games Explorer",
        url: "https://explorer-devnet.web3games.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Velas", symbol: "VLX", decimals: 18 },
    id: 106,
    name: "Velas",
    network: "Velas EVM Mainnet",
    rpcUrls: {
      default: "https://explorer.velas.com/rpc",
      public: "https://explorer.velas.com/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Velas Explorer", url: "https://evmexplorer.velas.com" },
      public: { name: "Velas Explorer", url: "https://evmexplorer.velas.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ThunderCore Token", symbol: "TT", decimals: 18 },
    id: 108,
    name: "TT",
    network: "ThunderCore Mainnet",
    rpcUrls: {
      default: "https://mainnet-rpc.thundercore.io",
      public: "https://mainnet-rpc.thundercore.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "thundercore-viewblock",
        url: "https://viewblock.io/thundercore",
      },
      public: {
        name: "thundercore-viewblock",
        url: "https://viewblock.io/thundercore",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EtherLite", symbol: "ETL", decimals: 18 },
    id: 111,
    name: "ETL",
    network: "EtherLite Chain",
    rpcUrls: {
      default: "https://rpc.etherlite.org",
      public: "https://rpc.etherlite.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Dehvo", symbol: "Deh", decimals: 18 },
    id: 113,
    name: "Dehvo",
    network: "Dehvo",
    rpcUrls: {
      default: "https://rpc2.dehvo.com",
      public: "https://rpc2.dehvo.com",
    },
    blockExplorers: {
      default: { name: "Dehvo Explorer", url: "https://explorer.dehvo.com" },
      public: { name: "Dehvo Explorer", url: "https://explorer.dehvo.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
    id: 122,
    name: "FUSE",
    network: "Fuse Mainnet",
    rpcUrls: { default: "https://rpc.fuse.io", public: "https://rpc.fuse.io" },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Decentralized Web Utility",
      symbol: "DWU",
      decimals: 18,
    },
    id: 124,
    name: "DWU",
    network: "Decentralized Web Mainnet",
    rpcUrls: {
      default: "https://decentralized-web.tech/dw_rpc.php",
      public: "https://decentralized-web.tech/dw_rpc.php",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OYchain Token", symbol: "OY", decimals: 18 },
    id: 126,
    name: "OYchain",
    network: "OYchain Mainnet",
    rpcUrls: {
      default: "https://rpc.mainnet.oychain.io",
      public: "https://rpc.mainnet.oychain.io",
    },
    blockExplorers: {
      default: {
        name: "OYchain Mainnet Explorer",
        url: "https://explorer.oychain.io",
      },
      public: {
        name: "OYchain Mainnet Explorer",
        url: "https://explorer.oychain.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Huobi ECO Chain Native Token",
      symbol: "HT",
      decimals: 18,
    },
    id: 128,
    name: "Heco",
    network: "Huobi ECO Chain Mainnet",
    rpcUrls: {
      default: "https://http-mainnet.hecochain.com",
      public: "https://http-mainnet.hecochain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "hecoinfo", url: "https://hecoinfo.com" },
      public: { name: "hecoinfo", url: "https://hecoinfo.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    id: 137,
    name: "Polygon",
    network: "Polygon Mainnet",
    rpcUrls: {
      default: "https://polygon-bor.publicnode.com",
      public: "https://polygon-bor.publicnode.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "polygonscan", url: "https://polygonscan.com" },
      public: { name: "polygonscan", url: "https://polygonscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Prodax", symbol: "DAX", decimals: 18 },
    id: 142,
    name: "DAX",
    network: "DAX CHAIN",
    rpcUrls: {
      default: "https://rpc.prodax.io",
      public: "https://rpc.prodax.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "PHI", symbol: "\u03a6", decimals: 18 },
    id: 144,
    name: "PHI",
    network: "PHI Network v2",
    rpcUrls: {
      default: "https://connect.phi.network",
      public: "https://connect.phi.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Phiscan", url: "https://phiscan.com" },
      public: { name: "Phiscan", url: "https://phiscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Lightstreams PHT", symbol: "PHT", decimals: 18 },
    id: 163,
    name: "PHT",
    network: "Lightstreams Mainnet",
    rpcUrls: {
      default: "https://node.mainnet.lightstreams.io",
      public: "https://node.mainnet.lightstreams.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "AIOZ", symbol: "AIOZ", decimals: 18 },
    id: 168,
    name: "AIOZ",
    network: "AIOZ Network",
    rpcUrls: {
      default: "https://eth-dataseed.aioz.network",
      public: "https://eth-dataseed.aioz.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "AIOZ Network Explorer",
        url: "https://explorer.aioz.network",
      },
      public: {
        name: "AIOZ Network Explorer",
        url: "https://explorer.aioz.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "AME", symbol: "AME", decimals: 18 },
    id: 180,
    name: "AME",
    network: "AME Chain Mainnet",
    rpcUrls: {
      default: "https://node1.amechain.io/",
      public: "https://node1.amechain.io/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "AME Scan", url: "https://amescan.io" },
      public: { name: "AME Scan", url: "https://amescan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Seele", symbol: "Seele", decimals: 18 },
    id: 186,
    name: "Seele",
    network: "Seele Mainnet",
    rpcUrls: {
      default: "https://rpc.seelen.pro/",
      public: "https://rpc.seelen.pro/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "seeleview", url: "https://seeleview.net" },
      public: { name: "seeleview", url: "https://seeleview.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BTM", symbol: "BTM", decimals: 18 },
    id: 188,
    name: "BMC",
    network: "BMC Mainnet",
    rpcUrls: {
      default: "https://mainnet.bmcchain.com/",
      public: "https://mainnet.bmcchain.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Blockmeta", url: "https://bmc.blockmeta.com" },
      public: { name: "Blockmeta", url: "https://bmc.blockmeta.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Crypto Emergency", symbol: "CEM", decimals: 18 },
    id: 193,
    name: "CEM",
    network: "Crypto Emergency",
    rpcUrls: {
      default: "https://cemchain.com",
      public: "https://cemchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "cemscan", url: "https://cemscan.com" },
      public: { name: "cemscan", url: "https://cemscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
    id: 199,
    name: "BTTC",
    network: "BitTorrent Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.bittorrentchain.io/",
      public: "https://rpc.bittorrentchain.io/",
    },
    blockExplorers: {
      default: { name: "bttcscan", url: "https://scan.bittorrentchain.io" },
      public: { name: "bttcscan", url: "https://scan.bittorrentchain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
    id: 200,
    name: "AOX",
    network: "Arbitrum on xDai",
    rpcUrls: {
      default: "https://arbitrum.xdaichain.com/",
      public: "https://arbitrum.xdaichain.com/",
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://blockscout.com/xdai/arbitrum",
      },
      public: {
        name: "blockscout",
        url: "https://blockscout.com/xdai/arbitrum",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Freight Trust Native",
      symbol: "0xF",
      decimals: 18,
    },
    id: 211,
    name: "EDI",
    network: "Freight Trust Network",
    rpcUrls: {
      default: "https://app.freighttrust.net/ftn/${API_KEY}",
      public: "https://app.freighttrust.net/ftn/${API_KEY}",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "SoterOne Mainnet Ether",
      symbol: "SOTER",
      decimals: 18,
    },
    id: 218,
    name: "SOTER",
    network: "SoterOne Mainnet old",
    rpcUrls: {
      default: "https://rpc.soter.one",
      public: "https://rpc.soter.one",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ASK", symbol: "ASK", decimals: 18 },
    id: 222,
    name: "ASK",
    network: "Permission",
    rpcUrls: {
      default: "https://blockchain-api-mainnet.permission.io/rpc",
      public: "https://blockchain-api-mainnet.permission.io/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "LA", symbol: "LA", decimals: 18 },
    id: 225,
    name: "LA",
    network: "LACHAIN Mainnet",
    rpcUrls: {
      default: "https://rpc-mainnet.lachain.io",
      public: "https://rpc-mainnet.lachain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://scan.lachain.io" },
      public: { name: "blockscout", url: "https://scan.lachain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Energy Web Token", symbol: "EWT", decimals: 18 },
    id: 246,
    name: "Energy Web Chain",
    network: "Energy Web Chain",
    rpcUrls: {
      default: "https://rpc.energyweb.org",
      public: "https://rpc.energyweb.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.energyweb.org" },
      public: { name: "blockscout", url: "https://explorer.energyweb.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
    id: 248,
    name: "Oasys",
    network: "Oasys Mainnet",
    rpcUrls: {
      default: "https://rpc.mainnet.oasys.games",
      public: "https://rpc.mainnet.oasys.games",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.oasys.games" },
      public: { name: "blockscout", url: "https://explorer.oasys.games" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
    id: 250,
    name: "FTM",
    network: "Fantom Opera",
    rpcUrls: {
      default: "https://rpc.ftm.tools",
      public: "https://rpc.ftm.tools",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "ftmscan", url: "https://ftmscan.com" },
      public: { name: "ftmscan", url: "https://ftmscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Suren", symbol: "SRN", decimals: 18 },
    id: 262,
    name: "SUR",
    network: "SUR Blockchain Network",
    rpcUrls: {
      default: "https://sur.nilin.org",
      public: "https://sur.nilin.org",
    },
    blockExplorers: {
      default: { name: "Surnet Explorer", url: "https://explorer.surnet.org" },
      public: { name: "Surnet Explorer", url: "https://explorer.surnet.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "High Performance Blockchain Ether",
      symbol: "HPB",
      decimals: 18,
    },
    id: 269,
    name: "HPB",
    network: "High Performance Blockchain",
    rpcUrls: { default: "https://hpbnode.com", public: "https://hpbnode.com" },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "hscan", url: "https://hscan.org" },
      public: { name: "hscan", url: "https://hscan.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 288,
    name: "ETH",
    network: "Boba Network",
    rpcUrls: {
      default: "https://mainnet.boba.network/",
      public: "https://mainnet.boba.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Bobascan", url: "https://bobascan.com" },
      public: { name: "Bobascan", url: "https://bobascan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
    id: 300,
    name: "OGC",
    network: "Optimism on Gnosis",
    rpcUrls: {
      default: "https://optimism.gnosischain.com",
      public: "https://optimism.gnosischain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://blockscout.com/xdai/optimism",
      },
      public: {
        name: "blockscout",
        url: "https://blockscout.com/xdai/optimism",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "filecoin", symbol: "FIL", decimals: 18 },
    id: 314,
    name: "FIL",
    network: "Filecoin - Mainnet",
    rpcUrls: {
      default: "https://api.node.glif.io/rpc/v0",
      public: "https://api.node.glif.io/rpc/v0",
    },
    blockExplorers: {
      default: { name: "Filfox", url: "https://filfox.info/en" },
      public: { name: "Filfox", url: "https://filfox.info/en" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KuCoin Token", symbol: "KCS", decimals: 18 },
    id: 321,
    name: "KCC",
    network: "KCC Mainnet",
    rpcUrls: {
      default: "https://public-rpc.blockpi.io/http/kcc",
      public: "https://public-rpc.blockpi.io/http/kcc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "KCC Explorer", url: "https://explorer.kcc.io/en" },
      public: { name: "KCC Explorer", url: "https://explorer.kcc.io/en" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Web3Q", symbol: "W3Q", decimals: 18 },
    id: 333,
    name: "Web3Q",
    network: "Web3Q Mainnet",
    rpcUrls: {
      default: "https://mainnet.web3q.io:8545",
      public: "https://mainnet.web3q.io:8545",
    },
    blockExplorers: {
      default: {
        name: "w3q-mainnet",
        url: "https://explorer.mainnet.web3q.io",
      },
      public: { name: "w3q-mainnet", url: "https://explorer.mainnet.web3q.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Shiden", symbol: "SDN", decimals: 18 },
    id: 336,
    name: "SDN",
    network: "Shiden",
    rpcUrls: {
      default: "https://shiden.public.blastapi.io",
      public: "https://shiden.public.blastapi.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "subscan", url: "https://shiden.subscan.io" },
      public: { name: "subscan", url: "https://shiden.subscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Theta Fuel", symbol: "TFUEL", decimals: 18 },
    id: 361,
    name: "Theta",
    network: "Theta Mainnet",
    rpcUrls: {
      default: "https://eth-rpc-api.thetatoken.org/rpc",
      public: "https://eth-rpc-api.thetatoken.org/rpc",
    },
    blockExplorers: {
      default: {
        name: "Theta Mainnet Explorer",
        url: "https://explorer.thetatoken.org",
      },
      public: {
        name: "Theta Mainnet Explorer",
        url: "https://explorer.thetatoken.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
    id: 369,
    name: "PLS",
    network: "PulseChain Mainnet",
    rpcUrls: {
      default: "https://rpc.mainnet.pulsechain.com/",
      public: "https://rpc.mainnet.pulsechain.com/",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Lisinski Ether", symbol: "LISINS", decimals: 18 },
    id: 385,
    name: "CRO",
    network: "Lisinski",
    rpcUrls: {
      default: "https://rpc-bitfalls1.lisinski.online",
      public: "https://rpc-bitfalls1.lisinski.online",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "SX Network", symbol: "SX", decimals: 18 },
    id: 416,
    name: "SX",
    network: "SX Network Mainnet",
    rpcUrls: {
      default: "https://rpc.sx.technology",
      public: "https://rpc.sx.technology",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "SX Network Explorer",
        url: "https://explorer.sx.technology",
      },
      public: {
        name: "SX Network Explorer",
        url: "https://explorer.sx.technology",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Acuteangle Native Token",
      symbol: "AAC",
      decimals: 18,
    },
    id: 512,
    name: "AAC",
    network: "Double-A Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.acuteangle.com",
      public: "https://rpc.acuteangle.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "aacscan", url: "https://scan.acuteangle.com" },
      public: { name: "aacscan", url: "https://scan.acuteangle.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Gear Zero Network Native Token",
      symbol: "GZN",
      decimals: 18,
    },
    id: 516,
    name: "GearZero",
    network: "Gear Zero Network Mainnet",
    rpcUrls: {
      default: "https://gzn.linksme.info",
      public: "https://gzn.linksme.info",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "XT Smart Chain Native Token",
      symbol: "XT",
      decimals: 18,
    },
    id: 520,
    name: "XSC",
    network: "XT Smart Chain Mainnet",
    rpcUrls: {
      default: "https://datarpc3.xsc.pub",
      public: "https://datarpc3.xsc.pub",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "xscscan", url: "https://xscscan.pub" },
      public: { name: "xscscan", url: "https://xscscan.pub" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Function X", symbol: "FX", decimals: 18 },
    id: 530,
    name: "Fxcore",
    network: "F(x)Core Mainnet Network",
    rpcUrls: {
      default: "https://fx-json-web3.functionx.io:8545",
      public: "https://fx-json-web3.functionx.io:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "FunctionX Explorer",
        url: "https://fx-evm.functionx.io",
      },
      public: {
        name: "FunctionX Explorer",
        url: "https://fx-evm.functionx.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CANDLE", symbol: "CNDL", decimals: 18 },
    id: 534,
    name: "Candle",
    network: "Candle",
    rpcUrls: {
      default: "https://rpc.cndlchain.com",
      public: "https://rpc.cndlchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "candleexplorer", url: "https://candleexplorer.com" },
      public: { name: "candleexplorer", url: "https://candleexplorer.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CLASS COIN", symbol: "CLASS", decimals: 18 },
    id: 555,
    name: "VELA1",
    network: "Vela1 Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.velaverse.io",
      public: "https://rpc.velaverse.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Vela1 Chain Mainnet Explorer",
        url: "https://exp.velaverse.io",
      },
      public: {
        name: "Vela1 Chain Mainnet Explorer",
        url: "https://exp.velaverse.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Astar", symbol: "ASTR", decimals: 18 },
    id: 592,
    name: "ASTR",
    network: "Astar",
    rpcUrls: {
      default: "https://rpc.astar.network:8545",
      public: "https://rpc.astar.network:8545",
    },
    blockExplorers: {
      default: { name: "subscan", url: "https://astar.subscan.io" },
      public: { name: "subscan", url: "https://astar.subscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BCS Token", symbol: "BCS", decimals: 18 },
    id: 707,
    name: "BCS",
    network: "BlockChain Station Mainnet",
    rpcUrls: {
      default: "https://rpc-mainnet.bcsdev.io",
      public: "https://rpc-mainnet.bcsdev.io",
    },
    blockExplorers: {
      default: {
        name: "BlockChain Station Explorer",
        url: "https://explorer.bcsdev.io",
      },
      public: {
        name: "BlockChain Station Explorer",
        url: "https://explorer.bcsdev.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Lycan", symbol: "LYC", decimals: 18 },
    id: 721,
    name: "LYC",
    network: "Lycan Chain",
    rpcUrls: {
      default: "https://rpc.lycanchain.com/",
      public: "https://rpc.lycanchain.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.lycanchain.com" },
      public: { name: "blockscout", url: "https://explorer.lycanchain.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Shiba Predator", symbol: "QOM", decimals: 18 },
    id: 766,
    name: "QOM",
    network: "QL1",
    rpcUrls: {
      default: "https://mainnet.qom.one:8545",
      public: "https://mainnet.qom.one:8545",
    },
    blockExplorers: {
      default: { name: "QL1 Mainnet Explorer", url: "https://mainnet.qom.one" },
      public: { name: "QL1 Mainnet Explorer", url: "https://mainnet.qom.one" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "cTH", symbol: "cTH", decimals: 18 },
    id: 777,
    name: "cheapETH",
    network: "cheapETH",
    rpcUrls: {
      default: "https://node.cheapeth.org/rpc",
      public: "https://node.cheapeth.org/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Haicoin", symbol: "HAIC", decimals: 18 },
    id: 803,
    name: "Haic",
    network: "Haic",
    rpcUrls: {
      default: "https://orig.haichain.io/",
      public: "https://orig.haichain.io/",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Qitmeer", symbol: "MEER", decimals: 18 },
    id: 813,
    name: "MEER",
    network: "Qitmeer",
    rpcUrls: {
      default: "https://evm-dataseed2.meerscan.com",
      public: "https://evm-dataseed2.meerscan.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "meerscan", url: "https://evm.meerscan.com" },
      public: { name: "meerscan", url: "https://evm.meerscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Callisto", symbol: "CLO", decimals: 18 },
    id: 820,
    name: "CLO",
    network: "Callisto Mainnet",
    rpcUrls: {
      default: "https://rpc.callisto.network/",
      public: "https://rpc.callisto.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "AMBROS", symbol: "AMBROS", decimals: 18 },
    id: 880,
    name: "ambroschain",
    network: "Ambros Chain Mainnet",
    rpcUrls: {
      default: "https://api.ambros.network",
      public: "https://api.ambros.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Ambros Chain Explorer", url: "https://ambrosscan.com" },
      public: { name: "Ambros Chain Explorer", url: "https://ambrosscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Wancoin", symbol: "WAN", decimals: 18 },
    id: 888,
    name: "WAN",
    network: "Wanchain",
    rpcUrls: {
      default: "https://gwan-ssl.wandevs.org:56891/",
      public: "https://gwan-ssl.wandevs.org:56891/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ComputeCoin", symbol: "CCN", decimals: 18 },
    id: 970,
    name: "CCN",
    network: "CCN",
    rpcUrls: {
      default: "https://rpc.mainnet.computecoin.com",
      public: "https://rpc.mainnet.computecoin.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ComputeCoin", symbol: "CCN", decimals: 18 },
    id: 971,
    name: "CCN Beta",
    network: "CCN Beta",
    rpcUrls: {
      default: "https://beta-rpc.mainnet.computecoin.com",
      public: "https://beta-rpc.mainnet.computecoin.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Nepal Blockchain Network Ether",
      symbol: "YETI",
      decimals: 18,
    },
    id: 977,
    name: "YETI",
    network: "Nepal Blockchain Network",
    rpcUrls: {
      default: "https://api.nepalblockchain.network",
      public: "https://api.nepalblockchain.network",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 980,
    name: "TOP",
    network: "TOP Mainnet EVM",
    rpcUrls: {
      default: "https://ethapi.topnetwork.org",
      public: "https://ethapi.topnetwork.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "topscan.dev", url: "https://www.topscan.io" },
      public: { name: "topscan.dev", url: "https://www.topscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Memo", symbol: "CMEMO", decimals: 18 },
    id: 985,
    name: "MEMO",
    network: "Memo Smart Chain Mainnet",
    rpcUrls: {
      default: "https://chain.metamemo.one:8501",
      public: "https://chain.metamemo.one:8501",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Memo Mainnet Explorer",
        url: "https://scan.metamemo.one:8080",
      },
      public: {
        name: "Memo Mainnet Explorer",
        url: "https://scan.metamemo.one:8080",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Lucky", symbol: "L99", decimals: 18 },
    id: 998,
    name: "LN",
    network: "Lucky Network",
    rpcUrls: {
      default: "https://rpc.lnscan.org",
      public: "https://rpc.lnscan.org",
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.luckynetwork.org" },
      public: { name: "blockscout", url: "https://explorer.luckynetwork.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "GCD", symbol: "GCD", decimals: 18 },
    id: 1000,
    name: "GTON",
    network: "GTON Mainnet",
    rpcUrls: {
      default: "https://rpc.gton.network/",
      public: "https://rpc.gton.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "GTON Network Explorer",
        url: "https://explorer.gton.network",
      },
      public: {
        name: "GTON Network Explorer",
        url: "https://explorer.gton.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Eurus", symbol: "EUN", decimals: 18 },
    id: 1008,
    name: "EUN",
    network: "Eurus Mainnet",
    rpcUrls: {
      default: "https://mainnet.eurus.network/",
      public: "https://mainnet.eurus.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "eurusexplorer", url: "https://explorer.eurus.network" },
      public: { name: "eurusexplorer", url: "https://explorer.eurus.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Evrice", symbol: "EVC", decimals: 18 },
    id: 1010,
    name: "EVC",
    network: "Evrice Network",
    rpcUrls: {
      default: "https://meta.evrice.com",
      public: "https://meta.evrice.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Newton", symbol: "NEW", decimals: 18 },
    id: 1012,
    name: "NEW",
    network: "Newton",
    rpcUrls: {
      default: "https://global.rpc.mainnet.newtonproject.org",
      public: "https://global.rpc.mainnet.newtonproject.org",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CLV", symbol: "CLV", decimals: 18 },
    id: 1024,
    name: "CLV",
    network: "CLV Parachain",
    rpcUrls: {
      default: "https://api-para.clover.finance",
      public: "https://api-para.clover.finance",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CFX", symbol: "CFX", decimals: 18 },
    id: 1030,
    name: "Conflux",
    network: "Conflux eSpace",
    rpcUrls: {
      default: "https://evm.confluxrpc.com",
      public: "https://evm.confluxrpc.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Conflux Scan", url: "https://evm.confluxscan.net" },
      public: { name: "Conflux Scan", url: "https://evm.confluxscan.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Metis", symbol: "METIS", decimals: 18 },
    id: 1088,
    name: "ETH",
    network: "Metis Andromeda Mainnet",
    rpcUrls: {
      default: "https://andromeda.metis.io/?owner=1088",
      public: "https://andromeda.metis.io/?owner=1088",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://andromeda-explorer.metis.io",
      },
      public: {
        name: "blockscout",
        url: "https://andromeda-explorer.metis.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
    id: 1111,
    name: "WEMIX",
    network: "WEMIX3.0 Mainnet",
    rpcUrls: {
      default: "https://api.wemix.com",
      public: "https://api.wemix.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "WEMIX Block Explorer",
        url: "https://explorer.wemix.com",
      },
      public: {
        name: "WEMIX Block Explorer",
        url: "https://explorer.wemix.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MathChain", symbol: "MATH", decimals: 18 },
    id: 1139,
    name: "MATH",
    network: "MathChain",
    rpcUrls: {
      default: "https://mathchain-us.maiziqianbao.net/rpc",
      public: "https://mathchain-us.maiziqianbao.net/rpc",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Iora", symbol: "IORA", decimals: 18 },
    id: 1197,
    name: "IORA",
    network: "Iora Chain",
    rpcUrls: {
      default: "https://dataseed.iorachain.com",
      public: "https://dataseed.iorachain.com",
    },
    blockExplorers: {
      default: { name: "ioraexplorer", url: "https://explorer.iorachain.com" },
      public: { name: "ioraexplorer", url: "https://explorer.iorachain.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "World Trade Token", symbol: "WTT", decimals: 18 },
    id: 1202,
    name: "WTT",
    network: "World Trade Technical Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.cadaut.com",
      public: "https://rpc.cadaut.com",
    },
    blockExplorers: {
      default: { name: "WTTScout", url: "https://explorer.cadaut.com" },
      public: { name: "WTTScout", url: "https://explorer.cadaut.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Popcat", symbol: "POP", decimals: 18 },
    id: 1213,
    name: "POPCATEUM",
    network: "Popcateum Mainnet",
    rpcUrls: {
      default: "https://dataseed.popcateum.org",
      public: "https://dataseed.popcateum.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "popcateum explorer",
        url: "https://explorer.popcateum.org",
      },
      public: {
        name: "popcateum explorer",
        url: "https://explorer.popcateum.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EnterCoin", symbol: "ENTER", decimals: 18 },
    id: 1214,
    name: "ENTER",
    network: "EnterChain Mainnet",
    rpcUrls: {
      default: "https://tapi.entercoin.net/",
      public: "https://tapi.entercoin.net/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Enter Explorer - Expenter",
        url: "https://explorer.entercoin.net",
      },
      public: {
        name: "Enter Explorer - Expenter",
        url: "https://explorer.entercoin.net",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ultron", symbol: "ULX", decimals: 18 },
    id: 1231,
    name: "Ultron",
    network: "Ultron Mainnet",
    rpcUrls: {
      default: "https://ultron-rpc.net",
      public: "https://ultron-rpc.net",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Ultron Explorer", url: "https://ulxscan.com" },
      public: { name: "Ultron Explorer", url: "https://ulxscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "FITFI", symbol: "FITFI", decimals: 18 },
    id: 1234,
    name: "STEP",
    network: "Step Network",
    rpcUrls: {
      default: "https://rpc.step.network",
      public: "https://rpc.step.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "StepScan", url: "https://stepscan.io" },
      public: { name: "StepScan", url: "https://stepscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OMCOIN", symbol: "OM", decimals: 18 },
    id: 1246,
    name: "omplatform",
    network: "OM Platform Mainnet",
    rpcUrls: {
      default: "https://rpc-cnx.omplatform.com/",
      public: "https://rpc-cnx.omplatform.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "OMSCAN - Expenter",
        url: "https://omscan.omplatform.com",
      },
      public: {
        name: "OMSCAN - Expenter",
        url: "https://omscan.omplatform.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "HALO", symbol: "HO", decimals: 18 },
    id: 1280,
    name: "HALO",
    network: "HALO Mainnet",
    rpcUrls: {
      default: "https://nodes.halo.land",
      public: "https://nodes.halo.land",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "HALOexplorer", url: "https://browser.halo.land" },
      public: { name: "HALOexplorer", url: "https://browser.halo.land" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Glimmer", symbol: "GLMR", decimals: 18 },
    id: 1284,
    name: "MOON",
    network: "Moonbeam",
    rpcUrls: {
      default: "https://rpc.api.moonbeam.network",
      public: "https://rpc.api.moonbeam.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "moonscan", url: "https://moonbeam.moonscan.io" },
      public: { name: "moonscan", url: "https://moonbeam.moonscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Moonriver", symbol: "MOVR", decimals: 18 },
    id: 1285,
    name: "MOON",
    network: "Moonriver",
    rpcUrls: {
      default: "https://rpc.api.moonriver.moonbeam.network",
      public: "https://rpc.api.moonriver.moonbeam.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "moonscan", url: "https://moonriver.moonscan.io" },
      public: { name: "moonscan", url: "https://moonriver.moonscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Rocs", symbol: "ROC", decimals: 18 },
    id: 1288,
    name: "MOON",
    network: "Moonrock",
    rpcUrls: {
      default: "https://rpc.api.moonrock.moonbeam.network",
      public: "https://rpc.api.moonrock.moonbeam.network",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Boba Token", symbol: "BOBA", decimals: 18 },
    id: 1294,
    name: "Bobabeam",
    network: "Boba Network Bobabeam",
    rpcUrls: {
      default: "https://replica.bobabeam.boba.network",
      public: "https://replica.bobabeam.boba.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Bobabeam block explorer",
        url: "https://blockexplorer.bobabeam.boba.network",
      },
      public: {
        name: "Bobabeam block explorer",
        url: "https://blockexplorer.bobabeam.boba.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Alyx Chain Native Token",
      symbol: "ALYX",
      decimals: 18,
    },
    id: 1314,
    name: "ALYX",
    network: "Alyx Mainnet",
    rpcUrls: {
      default: "https://rpc.alyxchain.com",
      public: "https://rpc.alyxchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "alyxscan", url: "https://www.alyxscan.com" },
      public: { name: "alyxscan", url: "https://www.alyxscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "AITD Mainnet", symbol: "AITD", decimals: 18 },
    id: 1319,
    name: "AITD",
    network: "Aitd Mainnet",
    rpcUrls: {
      default: "https://node.aitd.io",
      public: "https://node.aitd.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "AITD Chain Explorer Mainnet",
        url: "https://aitd-explorer-new.aitd.io",
      },
      public: {
        name: "AITD Chain Explorer Mainnet",
        url: "https://aitd-explorer-new.aitd.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KSX", symbol: "KSX", decimals: 18 },
    id: 1506,
    name: "Sherpax Mainnet",
    network: "Sherpax Mainnet",
    rpcUrls: {
      default: "https://mainnet.sherpax.io/rpc",
      public: "https://mainnet.sherpax.io/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Sherpax Mainnet Explorer",
        url: "https://evm.sherpax.io",
      },
      public: {
        name: "Sherpax Mainnet Explorer",
        url: "https://evm.sherpax.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Beagle", symbol: "BG", decimals: 18 },
    id: 1515,
    name: "BMC",
    network: "Beagle Messaging Chain",
    rpcUrls: {
      default: "https://beagle.chat/eth",
      public: "https://beagle.chat/eth",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Beagle Messaging Chain Explorer",
        url: "https://eth.beagle.chat",
      },
      public: {
        name: "Beagle Messaging Chain Explorer",
        url: "https://eth.beagle.chat",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Catecoin", symbol: "CATE", decimals: 18 },
    id: 1618,
    name: "Catechain",
    network: "Catecoin Chain Mainnet",
    rpcUrls: {
      default: "https://send.catechain.com",
      public: "https://send.catechain.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Atheios Ether", symbol: "ATH", decimals: 18 },
    id: 1620,
    name: "ATH",
    network: "Atheios",
    rpcUrls: {
      default: "https://wallet.atheios.com:8797",
      public: "https://wallet.atheios.com:8797",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Bitcoin Asset", symbol: "BTA", decimals: 18 },
    id: 1657,
    name: "btachain",
    network: "Btachain",
    rpcUrls: {
      default: "https://dataseed1.btachain.com/",
      public: "https://dataseed1.btachain.com/",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "LUDAN", symbol: "LUDAN", decimals: 18 },
    id: 1688,
    name: "LUDAN",
    network: "LUDAN Mainnet",
    rpcUrls: {
      default: "https://rpc.ludan.org/",
      public: "https://rpc.ludan.org/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ANY", symbol: "ANY", decimals: 18 },
    id: 1701,
    name: "ETH",
    network: "Anytype EVM Chain",
    rpcUrls: {
      default: "https://geth.anytype.io",
      public: "https://geth.anytype.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Anytype Explorer", url: "https://explorer.anytype.io" },
      public: { name: "Anytype Explorer", url: "https://explorer.anytype.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Jinda", symbol: "JINDA", decimals: 18 },
    id: 1707,
    name: "TBSI",
    network: "TBSI Mainnet",
    rpcUrls: {
      default: "https://rpc.blockchain.or.th",
      public: "https://rpc.blockchain.or.th",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Cube Chain Native Token",
      symbol: "CUBE",
      decimals: 18,
    },
    id: 1818,
    name: "Cube",
    network: "Cube Chain Mainnet",
    rpcUrls: {
      default: "https://http-mainnet-us.cube.network",
      public: "https://http-mainnet-us.cube.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "cube-scan", url: "https://cubescan.network" },
      public: { name: "cube-scan", url: "https://cubescan.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Teslafunds Ether", symbol: "TSF", decimals: 18 },
    id: 1856,
    name: "TSF",
    network: "Teslafunds",
    rpcUrls: {
      default: "https://tsfapi.europool.me",
      public: "https://tsfapi.europool.me",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BOYACoin", symbol: "BOY", decimals: 18 },
    id: 1898,
    name: "BON",
    network: "BON Network",
    rpcUrls: {
      default: "http://rpc.boyanet.org:8545",
      public: "http://rpc.boyanet.org:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.boyanet.org:4001" },
      public: { name: "explorer", url: "https://explorer.boyanet.org:4001" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONUS", symbol: "ONUS", decimals: 18 },
    id: 1975,
    name: "onus",
    network: "ONUS Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.onuschain.io",
      public: "https://rpc.onuschain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Onus explorer mainnet",
        url: "https://explorer.onuschain.io",
      },
      public: {
        name: "Onus explorer mainnet",
        url: "https://explorer.onuschain.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EtherGem Ether", symbol: "EGEM", decimals: 18 },
    id: 1987,
    name: "EGEM",
    network: "EtherGem",
    rpcUrls: {
      default: "https://jsonrpc.egem.io/custom",
      public: "https://jsonrpc.egem.io/custom",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Dogecoin", symbol: "DOGE", decimals: 18 },
    id: 2000,
    name: "DC",
    network: "Dogechain Mainnet",
    rpcUrls: {
      default: "https://rpc03-sg.dogechain.dog",
      public: "https://rpc03-sg.dogechain.dog",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "dogechain explorer",
        url: "https://explorer.dogechain.dog",
      },
      public: {
        name: "dogechain explorer",
        url: "https://explorer.dogechain.dog",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "milkAda", symbol: "mADA", decimals: 18 },
    id: 2001,
    name: "milkAda",
    network: "Milkomeda C1 Mainnet",
    rpcUrls: {
      default: "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",
      public: "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
      },
      public: {
        name: "Blockscout",
        url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "milkALGO", symbol: "mALGO", decimals: 18 },
    id: 2002,
    name: "milkALGO",
    network: "Milkomeda A1 Mainnet",
    rpcUrls: {
      default: "https://rpc-mainnet-algorand-rollup.a1.milkomeda.com",
      public: "https://rpc-mainnet-algorand-rollup.a1.milkomeda.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://explorer-mainnet-algorand-rollup.a1.milkomeda.com",
      },
      public: {
        name: "Blockscout",
        url: "https://explorer-mainnet-algorand-rollup.a1.milkomeda.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "USD", symbol: "USD", decimals: 18 },
    id: 2018,
    name: "PublicMint",
    network: "PublicMint Devnet",
    rpcUrls: {
      default: "https://rpc.dev.publicmint.io:8545",
      public: "https://rpc.dev.publicmint.io:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "PublicMint Explorer",
        url: "https://explorer.dev.publicmint.io",
      },
      public: {
        name: "PublicMint Explorer",
        url: "https://explorer.dev.publicmint.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "USD", symbol: "USD", decimals: 18 },
    id: 2020,
    name: "PublicMint",
    network: "PublicMint Mainnet",
    rpcUrls: {
      default: "https://rpc.publicmint.io:8545",
      public: "https://rpc.publicmint.io:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "PublicMint Explorer",
        url: "https://explorer.publicmint.io",
      },
      public: {
        name: "PublicMint Explorer",
        url: "https://explorer.publicmint.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Edge", symbol: "EDG", decimals: 18 },
    id: 2021,
    name: "EDG",
    network: "Edgeware Mainnet",
    rpcUrls: {
      default: "https://mainnet1.edgewa.re",
      public: "https://mainnet1.edgewa.re",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Rangers Protocol Gas",
      symbol: "RPG",
      decimals: 18,
    },
    id: 2025,
    name: "Rangers",
    network: "Rangers Protocol Mainnet",
    rpcUrls: {
      default: "https://mainnet.rangersprotocol.com/api/jsonrpc",
      public: "https://mainnet.rangersprotocol.com/api/jsonrpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "rangersscan", url: "https://scan.rangersprotocol.com" },
      public: { name: "rangersscan", url: "https://scan.rangersprotocol.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Qkacoin", symbol: "QKA", decimals: 18 },
    id: 2077,
    name: "Qkacoin",
    network: "Quokkacoin Mainnet",
    rpcUrls: {
      default: "https://rpc.qkacoin.org",
      public: "https://rpc.qkacoin.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.qkacoin.org" },
      public: { name: "blockscout", url: "https://explorer.qkacoin.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ecoball Coin", symbol: "ECO", decimals: 18 },
    id: 2100,
    name: "ECO",
    network: "Ecoball Mainnet",
    rpcUrls: {
      default: "https://api.ecoball.org/ecoball/",
      public: "https://api.ecoball.org/ecoball/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Ecoball Explorer", url: "https://scan.ecoball.org" },
      public: { name: "Ecoball Explorer", url: "https://scan.ecoball.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Sama Token", symbol: "SAMA", decimals: 18 },
    id: 2109,
    name: "EXN",
    network: "Exosama Network",
    rpcUrls: {
      default: "https://rpc.exosama.com",
      public: "https://rpc.exosama.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.exosama.com" },
      public: { name: "blockscout", url: "https://explorer.exosama.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BOSAGORA", symbol: "BOA", decimals: 18 },
    id: 2151,
    name: "ETH",
    network: "BOSagora Mainnet",
    rpcUrls: {
      default: "https://rpc.bosagora.org",
      public: "https://rpc.bosagora.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "BOASCAN", url: "https://boascan.io" },
      public: { name: "BOASCAN", url: "https://boascan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "FRA", symbol: "FRA", decimals: 18 },
    id: 2152,
    name: "Findora",
    network: "Findora Mainnet",
    rpcUrls: {
      default: "https://rpc-mainnet.findora.org",
      public: "https://rpc-mainnet.findora.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "findorascan", url: "https://evm.findorascan.io" },
      public: { name: "findorascan", url: "https://evm.findorascan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Bitcoin", symbol: "eBTC", decimals: 18 },
    id: 2203,
    name: "Bitcoin EVM",
    network: "Bitcoin EVM",
    rpcUrls: {
      default: "https://connect.bitcoinevm.com",
      public: "https://connect.bitcoinevm.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Explorer", url: "https://explorer.bitcoinevm.com" },
      public: { name: "Explorer", url: "https://explorer.bitcoinevm.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EVA", symbol: "EVA", decimals: 18 },
    id: 2213,
    name: "EVA",
    network: "Evanesco Mainnet",
    rpcUrls: {
      default: "https://seed4.evanesco.org:8546",
      public: "https://seed4.evanesco.org:8546",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Evanesco Explorer",
        url: "https://explorer.evanesco.org",
      },
      public: {
        name: "Evanesco Explorer",
        url: "https://explorer.evanesco.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
    id: 2222,
    name: "KAVA",
    network: "Kava EVM",
    rpcUrls: {
      default: "https://evm2.kava.io",
      public: "https://evm2.kava.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Kava EVM Explorer", url: "https://explorer.kava.io" },
      public: { name: "Kava EVM Explorer", url: "https://explorer.kava.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "VNDT", symbol: "VNDT", decimals: 18 },
    id: 2223,
    name: "VChain",
    network: "VChain Mainnet",
    rpcUrls: { default: "https://bc.vcex.xyz", public: "https://bc.vcex.xyz" },
    blockExplorers: {
      default: { name: "VChain Scan", url: "https://scan.vcex.xyz" },
      public: { name: "VChain Scan", url: "https://scan.vcex.xyz" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Altcoin", symbol: "ALT", decimals: 18 },
    id: 2330,
    name: "mainnet",
    network: "Altcoinchain",
    rpcUrls: {
      default: "https://rpc0.altcoinchain.org",
      public: "https://rpc0.altcoinchain.org",
    },
    blockExplorers: {
      default: {
        name: "expedition",
        url: "https://expedition.altcoinchain.org",
      },
      public: {
        name: "expedition",
        url: "https://expedition.altcoinchain.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KorthoChain", symbol: "KTO", decimals: 11 },
    id: 2559,
    name: "Kortho Chain",
    network: "Kortho Mainnet",
    rpcUrls: {
      default: "https://www.kortho-chain.com",
      public: "https://www.kortho-chain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TechPay", symbol: "TPC", decimals: 18 },
    id: 2569,
    name: "TPC",
    network: "TechPay Mainnet",
    rpcUrls: {
      default: "https://api.techpay.io/",
      public: "https://api.techpay.io/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "tpcscan", url: "https://tpcscan.com" },
      public: { name: "tpcscan", url: "https://tpcscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Redlight Coin", symbol: "REDLC", decimals: 18 },
    id: 2611,
    name: "REDLC",
    network: "Redlight Chain Mainnet",
    rpcUrls: {
      default: "https://dataseed2.redlightscan.finance",
      public: "https://dataseed2.redlightscan.finance",
    },
    blockExplorers: {
      default: { name: "REDLC Explorer", url: "https://redlightscan.finance" },
      public: { name: "REDLC Explorer", url: "https://redlightscan.finance" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EZChain", symbol: "EZC", decimals: 18 },
    id: 2612,
    name: "EZC",
    network: "EZChain C-Chain Mainnet",
    rpcUrls: {
      default: "https://api.ezchain.com/ext/bc/C/rpc",
      public: "https://api.ezchain.com/ext/bc/C/rpc",
    },
    blockExplorers: {
      default: { name: "ezchain", url: "https://cchain-explorer.ezchain.com" },
      public: { name: "ezchain", url: "https://cchain-explorer.ezchain.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BTY", symbol: "BTY", decimals: 18 },
    id: 2999,
    name: "BTY",
    network: "BitYuan Mainnet",
    rpcUrls: {
      default: "https://mainnet.bityuan.com/eth",
      public: "https://mainnet.bityuan.com/eth",
    },
    blockExplorers: {
      default: {
        name: "BitYuan Block Chain Explorer",
        url: "https://mainnet.bityuan.com",
      },
      public: {
        name: "BitYuan Block Chain Explorer",
        url: "https://mainnet.bityuan.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CPAY", symbol: "CPAY", decimals: 18 },
    id: 3000,
    name: "CENNZnet",
    network: "CENNZnet Rata",
    rpcUrls: {
      default: "https://rata.centrality.me/public",
      public: "https://rata.centrality.me/public",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CPAY", symbol: "CPAY", decimals: 18 },
    id: 3001,
    name: "CENNZnet",
    network: "CENNZnet Nikau",
    rpcUrls: {
      default: "https://nikau.centrality.me/public",
      public: "https://nikau.centrality.me/public",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "UNcover",
        url: "https://www.uncoverexplorer.com/?network=Nikau",
      },
      public: {
        name: "UNcover",
        url: "https://www.uncoverexplorer.com/?network=Nikau",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Web3Q", symbol: "W3Q", decimals: 18 },
    id: 3334,
    name: "Web3Q",
    network: "Web3Q Galileo",
    rpcUrls: {
      default: "https://galileo.web3q.io:8545",
      public: "https://galileo.web3q.io:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "w3q-galileo",
        url: "https://explorer.galileo.web3q.io",
      },
      public: { name: "w3q-galileo", url: "https://explorer.galileo.web3q.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "PRB", symbol: "PRB", decimals: 18 },
    id: 3400,
    name: "PRB",
    network: "Paribu Net Mainnet",
    rpcUrls: {
      default: "https://rpc.paribu.network",
      public: "https://rpc.paribu.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Paribu Net Explorer",
        url: "https://explorer.paribu.network",
      },
      public: {
        name: "Paribu Net Explorer",
        url: "https://explorer.paribu.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "JFIN Coin", symbol: "jfin", decimals: 18 },
    id: 3501,
    name: "JFIN",
    network: "JFIN Chain",
    rpcUrls: {
      default: "https://rpc.jfinchain.com",
      public: "https://rpc.jfinchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "JFIN Chain Explorer",
        url: "https://exp.jfinchain.com",
      },
      public: { name: "JFIN Chain Explorer", url: "https://exp.jfinchain.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Pando token ", symbol: "PTX", decimals: 18 },
    id: 3601,
    name: "Pando",
    network: "Pandonet",
    rpcUrls: {
      default: "https://eth-rpc-api.pandoproject.org/rpc",
      public: "https://eth-rpc-api.pandoproject.org/rpc",
    },
    blockExplorers: {
      default: {
        name: "Pando Mainnet Explorer",
        url: "https://explorer.pandoproject.org",
      },
      public: {
        name: "Pando Mainnet Explorer",
        url: "https://explorer.pandoproject.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "J", symbol: "J", decimals: 18 },
    id: 3666,
    name: "metacode",
    network: "Metacodechain",
    rpcUrls: {
      default: "https://j.blockcoach.com:8503",
      public: "https://j.blockcoach.com:8503",
    },
    blockExplorers: {
      default: { name: "meta", url: "https://j.blockcoach.com:8089" },
      public: { name: "meta", url: "https://j.blockcoach.com:8089" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Bittex", symbol: "BTX", decimals: 18 },
    id: 3690,
    name: "BTX",
    network: "Bittex Mainnet",
    rpcUrls: {
      default: "https://rpc2.bittexscan.info",
      public: "https://rpc2.bittexscan.info",
    },
    blockExplorers: {
      default: { name: "bittexscan", url: "https://bittexscan.com" },
      public: { name: "bittexscan", url: "https://bittexscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Crossbell Token", symbol: "CSB", decimals: 18 },
    id: 3737,
    name: "Crossbell",
    network: "Crossbell",
    rpcUrls: {
      default: "https://rpc.crossbell.io",
      public: "https://rpc.crossbell.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Crossbell Explorer", url: "https://scan.crossbell.io" },
      public: { name: "Crossbell Explorer", url: "https://scan.crossbell.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "DYNO Token", symbol: "DYNO", decimals: 18 },
    id: 3966,
    name: "DYNO",
    network: "DYNO Mainnet",
    rpcUrls: {
      default: "https://api.dynoprotocol.com",
      public: "https://api.dynoprotocol.com",
    },
    blockExplorers: {
      default: { name: "DYNO Explorer", url: "https://dynoscan.io" },
      public: { name: "DYNO Explorer", url: "https://dynoscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "YCC", symbol: "YCC", decimals: 18 },
    id: 3999,
    name: "YCC",
    network: "YuanChain Mainnet",
    rpcUrls: {
      default: "https://mainnet.yuan.org/eth",
      public: "https://mainnet.yuan.org/eth",
    },
    blockExplorers: {
      default: { name: "YuanChain Explorer", url: "https://mainnet.yuan.org" },
      public: { name: "YuanChain Explorer", url: "https://mainnet.yuan.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "PHI", symbol: "\u03a6", decimals: 18 },
    id: 4181,
    name: "PHI V1",
    network: "PHI Network V1",
    rpcUrls: {
      default: "https://rpc2.phi.network",
      public: "https://rpc2.phi.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "PHI Explorer", url: "https://explorer.phi.network" },
      public: { name: "PHI Explorer", url: "https://explorer.phi.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "IoTeX", symbol: "IOTX", decimals: 18 },
    id: 4689,
    name: "iotex.io",
    network: "IoTeX Network Mainnet",
    rpcUrls: {
      default: "https://babel-api.mainnet.iotex.io",
      public: "https://babel-api.mainnet.iotex.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "iotexscan", url: "https://iotexscan.io" },
      public: { name: "iotexscan", url: "https://iotexscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Venidium", symbol: "XVM", decimals: 18 },
    id: 4919,
    name: "XVM",
    network: "Venidium Mainnet",
    rpcUrls: {
      default: "https://rpc.venidium.io",
      public: "https://rpc.venidium.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Venidium Explorer",
        url: "https://evm.venidiumexplorer.com",
      },
      public: {
        name: "Venidium Explorer",
        url: "https://evm.venidiumexplorer.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TLChain Network", symbol: "TLC", decimals: 18 },
    id: 5177,
    name: "TLC",
    network: "TLChain Network Mainnet",
    rpcUrls: {
      default: "https://mainnet-rpc.tlxscan.com/",
      public: "https://mainnet-rpc.tlxscan.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "TLChain Explorer",
        url: "https://explorer.tlchain.network",
      },
      public: {
        name: "TLChain Explorer",
        url: "https://explorer.tlchain.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "EraSwap", symbol: "ES", decimals: 18 },
    id: 5197,
    name: "ESN",
    network: "EraSwap Mainnet",
    rpcUrls: {
      default: "https://rpc-mumbai.mainnet.eraswap.network",
      public: "https://rpc-mumbai.mainnet.eraswap.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Firechain", symbol: "FIRE", decimals: 18 },
    id: 5290,
    name: "FIRE",
    network: "Firechain Mainnet",
    rpcUrls: {
      default: "https://mainnet.rpc1.thefirechain.com",
      public: "https://mainnet.rpc1.thefirechain.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "UZMI", symbol: "UZMI", decimals: 18 },
    id: 5315,
    name: "UZMI",
    network: "Uzmi Network Mainnet",
    rpcUrls: {
      default: "https://network.uzmigames.com.br/",
      public: "https://network.uzmigames.com.br/",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 5551,
    name: "Nahmii",
    network: "Nahmii Mainnet",
    rpcUrls: {
      default: "https://l2.nahmii.io",
      public: "https://l2.nahmii.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Nahmii mainnet explorer",
        url: "https://explorer.nahmii.io",
      },
      public: {
        name: "Nahmii mainnet explorer",
        url: "https://explorer.nahmii.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "DigestCoin", symbol: "DGCC", decimals: 18 },
    id: 5777,
    name: "DSC",
    network: "Digest Swarm Chain",
    rpcUrls: {
      default: "https://rpc.digestgroup.ltd",
      public: "https://rpc.digestgroup.ltd",
    },
    blockExplorers: {
      default: {
        name: "swarmexplorer",
        url: "https://explorer.digestgroup.ltd",
      },
      public: {
        name: "swarmexplorer",
        url: "https://explorer.digestgroup.ltd",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Rubid", symbol: "RBD", decimals: 18 },
    id: 5869,
    name: "RBD",
    network: "Wegochain Rubidium Mainnet",
    rpcUrls: {
      default: "http://wallet.wegochain.io:7764",
      public: "http://wallet.wegochain.io:7764",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "wegoscan2", url: "https://scan2.wegochain.io" },
      public: { name: "wegoscan2", url: "https://scan2.wegochain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Tres Leches", symbol: "TRES", decimals: 18 },
    id: 6066,
    name: "TresLeches",
    network: "Tres Leches Mainnet",
    rpcUrls: {
      default: "https://rpc.tresleches.finance/",
      public: "https://rpc.tresleches.finance/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "treslechesexplorer",
        url: "https://explorer.tresleches.finance",
      },
      public: {
        name: "treslechesexplorer",
        url: "https://explorer.tresleches.finance",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Pixie Chain Native Token",
      symbol: "PIX",
      decimals: 18,
    },
    id: 6626,
    name: "PixieChain",
    network: "Pixie Chain Mainnet",
    rpcUrls: {
      default: "https://http-mainnet.chain.pixie.xyz",
      public: "https://http-mainnet.chain.pixie.xyz",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://scan.chain.pixie.xyz" },
      public: { name: "blockscout", url: "https://scan.chain.pixie.xyz" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Tomb", symbol: "TOMB", decimals: 18 },
    id: 6969,
    name: "Tomb Chain",
    network: "Tomb Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.tombchain.com/",
      public: "https://rpc.tombchain.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "tombscout", url: "https://tombscout.com" },
      public: { name: "tombscout", url: "https://tombscout.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "PSC", symbol: "PSC", decimals: 18 },
    id: 6999,
    name: "PSC",
    network: "PolySmartChain",
    rpcUrls: {
      default: "https://seed2.polysmartchain.com/",
      public: "https://seed2.polysmartchain.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Zeta", symbol: "ZETA", decimals: 18 },
    id: 7000,
    name: "ZetaChain",
    network: "ZetaChain Mainnet",
    rpcUrls: {
      default: "https://api.mainnet.zetachain.com/evm",
      public: "https://api.mainnet.zetachain.com/evm",
    },
    blockExplorers: {
      default: {
        name: "ZetaChain Mainnet Explorer",
        url: "https://explorer.mainnet.zetachain.com",
      },
      public: {
        name: "ZetaChain Mainnet Explorer",
        url: "https://explorer.mainnet.zetachain.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ella", symbol: "ELLA", decimals: 18 },
    id: 7027,
    name: "ella",
    network: "Ella the heart",
    rpcUrls: {
      default: "https://rpc.ella.network",
      public: "https://rpc.ella.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Ella", url: "https://ella.network" },
      public: { name: "Ella", url: "https://ella.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Planq", symbol: "PLQ", decimals: 18 },
    id: 7070,
    name: "Planq",
    network: "Planq Mainnet",
    rpcUrls: {
      default: "https://evm-rpc.planq.network",
      public: "https://evm-rpc.planq.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Planq EVM Explorer (Blockscout)",
        url: "https://evm.planq.network",
      },
      public: {
        name: "Planq EVM Explorer (Blockscout)",
        url: "https://evm.planq.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Shyft", symbol: "SHYFT", decimals: 18 },
    id: 7341,
    name: "SHYFT",
    network: "Shyft Mainnet",
    rpcUrls: {
      default: "https://rpc.shyft.network/",
      public: "https://rpc.shyft.network/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Shyft BX", url: "https://bx.shyft.network" },
      public: { name: "Shyft BX", url: "https://bx.shyft.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Canto", symbol: "CANTO", decimals: 18 },
    id: 7700,
    name: "Canto",
    network: "Canto",
    rpcUrls: {
      default: "https://canto.slingshot.finance",
      public: "https://canto.slingshot.finance",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Canto EVM Explorer (Blockscout)",
        url: "https://evm.explorer.canto.io",
      },
      public: {
        name: "Canto EVM Explorer (Blockscout)",
        url: "https://evm.explorer.canto.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Tele", symbol: "TELE", decimals: 18 },
    id: 8000,
    name: "Teleport",
    network: "Teleport",
    rpcUrls: {
      default: "https://evm-rpc.teleport.network",
      public: "https://evm-rpc.teleport.network",
    },
    blockExplorers: {
      default: {
        name: "Teleport EVM Explorer (Blockscout)",
        url: "https://evm-explorer.teleport.network",
      },
      public: {
        name: "Teleport EVM Explorer (Blockscout)",
        url: "https://evm-explorer.teleport.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Shardeum SHM", symbol: "SHM", decimals: 18 },
    id: 8080,
    name: "Shardeum",
    network: "Shardeum Liberty 1.6",
    rpcUrls: {
      default: "https://liberty10.shardeum.org/",
      public: "https://liberty10.shardeum.org/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Sharedum Scan",
        url: "https://explorer-liberty10.shardeum.org",
      },
      public: {
        name: "Sharedum Scan",
        url: "https://explorer-liberty10.shardeum.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KLAY", symbol: "KLAY", decimals: 18 },
    id: 8217,
    name: "KLAY",
    network: "Klaytn Mainnet Cypress",
    rpcUrls: {
      default: "https://public-node-api.klaytnapi.com/v1/cypress",
      public: "https://public-node-api.klaytnapi.com/v1/cypress",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Klaytnscope", url: "https://scope.klaytn.com" },
      public: { name: "Klaytnscope", url: "https://scope.klaytn.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Toki", symbol: "TOKI", decimals: 18 },
    id: 8654,
    name: "TOKI",
    network: "Toki Network",
    rpcUrls: {
      default: "https://mainnet.buildwithtoki.com/v0/rpc",
      public: "https://mainnet.buildwithtoki.com/v0/rpc",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TOOL Global", symbol: "OLO", decimals: 18 },
    id: 8723,
    name: "OLO",
    network: "TOOL Global Mainnet",
    rpcUrls: {
      default: "https://mainnet-web3.wolot.io",
      public: "https://mainnet-web3.wolot.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "OLO Block Explorer", url: "https://www.olo.network" },
      public: { name: "OLO Block Explorer", url: "https://www.olo.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Alph Network", symbol: "ALPH", decimals: 18 },
    id: 8738,
    name: "ALPH",
    network: "Alph Network",
    rpcUrls: {
      default: "https://rpc.alph.network",
      public: "https://rpc.alph.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "alphscan", url: "https://explorer.alph.network" },
      public: { name: "alphscan", url: "https://explorer.alph.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "VSC", symbol: "VSC", decimals: 18 },
    id: 8889,
    name: "VSC",
    network: "Vyvo Smart Chain",
    rpcUrls: {
      default: "https://vsc-dataseed.vyvo.org:8889",
      public: "https://vsc-dataseed.vyvo.org:8889",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Mammoth Token", symbol: "MMT", decimals: 18 },
    id: 8898,
    name: "MMT",
    network: "Mammoth Mainnet",
    rpcUrls: {
      default: "https://dataseed2.mmtscan.io",
      public: "https://dataseed2.mmtscan.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "mmtscan", url: "https://mmtscan.io" },
      public: { name: "mmtscan", url: "https://mmtscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BERG", symbol: "U+25B3", decimals: 18 },
    id: 8995,
    name: "bloxberg",
    network: "bloxberg",
    rpcUrls: {
      default: "https://core.bloxberg.org",
      public: "https://core.bloxberg.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Evmos", symbol: "EVMOS", decimals: 18 },
    id: 9001,
    name: "Evmos",
    network: "Evmos",
    rpcUrls: {
      default: "https://evmos-evm.publicnode.com",
      public: "https://evmos-evm.publicnode.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Evmos EVM Explorer (Blockscout)",
        url: "https://evm.evmos.org",
      },
      public: {
        name: "Evmos EVM Explorer (Blockscout)",
        url: "https://evm.evmos.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "BerylBit Chain Native Token",
      symbol: "BRB",
      decimals: 18,
    },
    id: 9012,
    name: "BRB",
    network: "BerylBit Mainnet",
    rpcUrls: {
      default: "https://mainnet.berylbit.io",
      public: "https://mainnet.berylbit.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "berylbit-explorer",
        url: "https://explorer.berylbit.io",
      },
      public: {
        name: "berylbit-explorer",
        url: "https://explorer.berylbit.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "GN Coin", symbol: "GNC", decimals: 18 },
    id: 9100,
    name: "Genesis",
    network: "Genesis Coin",
    rpcUrls: {
      default: "https://genesis-gn.com",
      public: "https://genesis-gn.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Bitcoin Cash", symbol: "BCH", decimals: 18 },
    id: 10000,
    name: "smartBCH",
    network: "Smart Bitcoin Cash",
    rpcUrls: {
      default: "https://smartbch.devops.cash/mainnet",
      public: "https://smartbch.devops.cash/mainnet",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 10086,
    name: "ETH",
    network: "SJATSH",
    rpcUrls: {
      default: "http://geth.free.idcfengye.com",
      public: "http://geth.free.idcfengye.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "GEN", symbol: "GEN", decimals: 18 },
    id: 10101,
    name: "GEN",
    network: "Blockchain Genesis Mainnet",
    rpcUrls: {
      default: "https://asia.mainnet.xixoio.com",
      public: "https://asia.mainnet.xixoio.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "0XT", symbol: "0XT", decimals: 18 },
    id: 10248,
    name: "0XTade Chain",
    network: "0XTade",
    rpcUrls: {
      default: "https://node.0xtchain.com",
      public: "https://node.0xtchain.com",
    },
    blockExplorers: {
      default: { name: "0xtrade Scan", url: "https://www.0xtscan.com" },
      public: { name: "0xtrade Scan", url: "https://www.0xtscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "NUM Token", symbol: "NUM", decimals: 18 },
    id: 10507,
    name: "NUM",
    network: "Numbers Mainnet",
    rpcUrls: {
      default: "https://mainnetrpc.num.network",
      public: "https://mainnetrpc.num.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "ethernal", url: "https://mainnet.num.network" },
      public: { name: "ethernal", url: "https://mainnet.num.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CryptoCoinPay", symbol: "CCP", decimals: 18 },
    id: 10823,
    name: "CCP",
    network: "CryptoCoinPay",
    rpcUrls: {
      default: "http://node106.cryptocoinpay.info:8545",
      public: "http://node106.cryptocoinpay.info:8545",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "CCP Explorer", url: "https://cryptocoinpay.info" },
      public: { name: "CCP Explorer", url: "https://cryptocoinpay.info" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Quadrans Coin", symbol: "QDC", decimals: 18 },
    id: 10946,
    name: "QDC",
    network: "Quadrans Blockchain",
    rpcUrls: {
      default: "https://rpceu.quadrans.io",
      public: "https://rpceu.quadrans.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.quadrans.io" },
      public: { name: "explorer", url: "https://explorer.quadrans.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Astra", symbol: "ASA", decimals: 18 },
    id: 11110,
    name: "Astra",
    network: "Astra",
    rpcUrls: {
      default: "https://rpc1.astranaut.io",
      public: "https://rpc1.astranaut.io",
    },
    blockExplorers: {
      default: {
        name: "Astra EVM Explorer (Blockscout)",
        url: "https://explorer.astranaut.io",
      },
      public: {
        name: "Astra EVM Explorer (Blockscout)",
        url: "https://explorer.astranaut.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "nSAN", symbol: "nSAN", decimals: 18 },
    id: 11888,
    name: "SanRChain",
    network: "SanR Chain",
    rpcUrls: {
      default: "https://sanrchain-node.santiment.net",
      public: "https://sanrchain-node.santiment.net",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "SanR Chain Explorer",
        url: "https://sanrchain-explorer.santiment.net",
      },
      public: {
        name: "SanR Chain Explorer",
        url: "https://sanrchain-explorer.santiment.net",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ZERO", symbol: "ZERO", decimals: 18 },
    id: 12052,
    name: "ZERO",
    network: "Singularity ZERO Mainnet",
    rpcUrls: {
      default: "https://zerorpc.singularity.gold",
      public: "https://zerorpc.singularity.gold",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "zeroscan", url: "https://zeroscan.singularity.gold" },
      public: { name: "zeroscan", url: "https://zeroscan.singularity.gold" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ECG", symbol: "ECG", decimals: 18 },
    id: 13000,
    name: "SPS",
    network: "SPS",
    rpcUrls: {
      default: "https://marketplace.ssquad.games",
      public: "https://marketplace.ssquad.games",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "SPS Explorer", url: "http://spsscan.ssquad.games" },
      public: { name: "SPS Explorer", url: "http://spsscan.ssquad.games" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Phoenix", symbol: "PHX", decimals: 18 },
    id: 13381,
    name: "Phoenix",
    network: "Phoenix Mainnet",
    rpcUrls: {
      default: "https://rpc.phoenixplorer.com/",
      public: "https://rpc.phoenixplorer.com/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "phoenixplorer", url: "https://phoenixplorer.com" },
      public: { name: "phoenixplorer", url: "https://phoenixplorer.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MetaDot Token", symbol: "MTT", decimals: 18 },
    id: 16000,
    name: "MTT",
    network: "MetaDot Mainnet",
    rpcUrls: {
      default: "https://mainnet.metadot.network",
      public: "https://mainnet.metadot.network",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Proof Of Memes", symbol: "POM", decimals: 18 },
    id: 18159,
    name: "POM",
    network: "Proof Of Memes",
    rpcUrls: {
      default: "https://mainnet-rpc4.memescan.io",
      public: "https://mainnet-rpc4.memescan.io",
    },
    blockExplorers: {
      default: { name: "explorer-proofofmemes", url: "https://memescan.io" },
      public: { name: "explorer-proofofmemes", url: "https://memescan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "BTCIX Network", symbol: "BTCIX", decimals: 18 },
    id: 19845,
    name: "BTCIX",
    network: "BTCIX Network",
    rpcUrls: {
      default: "https://seed.btcix.org/rpc",
      public: "https://seed.btcix.org/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "BTCIXScan", url: "https://btcixscan.com" },
      public: { name: "BTCIXScan", url: "https://btcixscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CPAY", symbol: "CPAY", decimals: 18 },
    id: 21337,
    name: "CENNZnet",
    network: "CENNZnet Azalea",
    rpcUrls: {
      default: "https://cennznet.unfrastructure.io/public",
      public: "https://cennznet.unfrastructure.io/public",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "UNcover", url: "https://uncoverexplorer.com" },
      public: { name: "UNcover", url: "https://uncoverexplorer.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "omChain", symbol: "OMC", decimals: 18 },
    id: 21816,
    name: "OML",
    network: "omChain Mainnet",
    rpcUrls: {
      default: "https://seed.omchain.io",
      public: "https://seed.omchain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "omChain Explorer", url: "https://explorer.omchain.io" },
      public: { name: "omChain Explorer", url: "https://explorer.omchain.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "shuffle", symbol: "SFL", decimals: 18 },
    id: 22023,
    name: "Taycan",
    network: "Taycan",
    rpcUrls: {
      default: "https://taycan-rpc.hupayx.io:8545",
      public: "https://taycan-rpc.hupayx.io:8545",
    },
    blockExplorers: {
      default: {
        name: "Taycan Explorer(Blockscout)",
        url: "https://taycan-evmscan.hupayx.io",
      },
      public: {
        name: "Taycan Explorer(Blockscout)",
        url: "https://taycan-evmscan.hupayx.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MAP", symbol: "MAP", decimals: 18 },
    id: 22776,
    name: "MAP",
    network: "MAP Mainnet",
    rpcUrls: {
      default: "https://rpc.maplabs.io",
      public: "https://rpc.maplabs.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "mapscan", url: "https://mapscan.io" },
      public: { name: "mapscan", url: "https://mapscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MintMe.com Coin", symbol: "MINTME", decimals: 18 },
    id: 24734,
    name: "MINTME",
    network: "MintMe.com Coin",
    rpcUrls: {
      default: "https://node1.mintme.com",
      public: "https://node1.mintme.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OAC", symbol: "OAC", decimals: 18 },
    id: 26863,
    name: "OasisChain",
    network: "OasisChain Mainnet",
    rpcUrls: {
      default: "https://rpc3.oasischain.io",
      public: "https://rpc3.oasischain.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "OasisChain Explorer",
        url: "https://scan.oasischain.io",
      },
      public: {
        name: "OasisChain Explorer",
        url: "https://scan.oasischain.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Ethersocial Network Ether",
      symbol: "ESN",
      decimals: 18,
    },
    id: 31102,
    name: "ESN",
    network: "Ethersocial Network",
    rpcUrls: {
      default: "https://api.esn.gonspool.com",
      public: "https://api.esn.gonspool.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Bitrise Token", symbol: "Brise", decimals: 18 },
    id: 32520,
    name: "Brise",
    network: "Bitgert Mainnet",
    rpcUrls: {
      default: "https://serverrpc.com",
      public: "https://serverrpc.com",
    },
    blockExplorers: {
      default: { name: "Brise Scan", url: "https://brisescan.com" },
      public: { name: "Brise Scan", url: "https://brisescan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Fusion", symbol: "FSN", decimals: 18 },
    id: 32659,
    name: "FSN",
    network: "Fusion Mainnet",
    rpcUrls: { default: "https://fsn.dev/api", public: "https://fsn.dev/api" },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Aves", symbol: "AVS", decimals: 18 },
    id: 33333,
    name: "AVS",
    network: "Aves Mainnet",
    rpcUrls: {
      default: "https://rpc.avescoin.io",
      public: "https://rpc.avescoin.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "avescan", url: "https://avescan.io" },
      public: { name: "avescan", url: "https://avescan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Q token", symbol: "Q", decimals: 18 },
    id: 35441,
    name: "Q",
    network: "Q Mainnet",
    rpcUrls: { default: "https://rpc.q.org", public: "https://rpc.q.org" },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Q explorer", url: "https://explorer.q.org" },
      public: { name: "Q explorer", url: "https://explorer.q.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Energi", symbol: "NRG", decimals: 18 },
    id: 39797,
    name: "NRG",
    network: "Energi Mainnet",
    rpcUrls: {
      default: "https://nodeapi.energi.network",
      public: "https://nodeapi.energi.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Oxyn Gas", symbol: "OXYN", decimals: 18 },
    id: 41500,
    name: "Opulent-X",
    network: "Opulent-X BETA",
    rpcUrls: {
      default: "https://connect.opulent-x.com",
      public: "https://connect.opulent-x.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Opulent-X BETA Explorer",
        url: "https://explorer.opulent-x.com",
      },
      public: {
        name: "Opulent-X BETA Explorer",
        url: "https://explorer.opulent-x.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 42161,
    name: "ETH",
    network: "Arbitrum One",
    rpcUrls: {
      infura: "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
      default: "https://arb1.arbitrum.io/rpc",
      public: "https://arb1.arbitrum.io/rpc",
      alchemy: "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Arbiscan", url: "https://arbiscan.io" },
      public: { name: "Arbiscan", url: "https://arbiscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 42170,
    name: "ETH",
    network: "Arbitrum Nova",
    rpcUrls: {
      default: "https://nova.arbitrum.io/rpc",
      public: "https://nova.arbitrum.io/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Arbitrum Nova Chain Explorer",
        url: "https://nova-explorer.arbitrum.io",
      },
      public: {
        name: "Arbitrum Nova Chain Explorer",
        url: "https://nova-explorer.arbitrum.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
    id: 42220,
    name: "CELO",
    network: "Celo Mainnet",
    rpcUrls: {
      default: "https://forno.celo.org",
      public: "https://forno.celo.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Celoscan", url: "https://celoscan.io" },
      public: { name: "Celoscan", url: "https://celoscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Emerald Rose", symbol: "ROSE", decimals: 18 },
    id: 42262,
    name: "Emerald",
    network: "Oasis Emerald ParaTime Mainnet",
    rpcUrls: {
      default: "https://emerald.oasis.dev",
      public: "https://emerald.oasis.dev",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Emerald ParaTime Mainnet Explorer",
        url: "https://explorer.emerald.oasis.dev",
      },
      public: {
        name: "Emerald ParaTime Mainnet Explorer",
        url: "https://explorer.emerald.oasis.dev",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Athereum Ether", symbol: "ATH", decimals: 18 },
    id: 43110,
    name: "ATH",
    network: "Athereum",
    rpcUrls: {
      default: "https://ava.network:21015/ext/evm/rpc",
      public: "https://ava.network:21015/ext/evm/rpc",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    id: 43114,
    name: "AVAX",
    network: "Avalanche C-Chain",
    rpcUrls: {
      default: "https://api.avax.network/ext/bc/C/rpc",
      public: "https://api.avax.network/ext/bc/C/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "snowtrace", url: "https://snowtrace.io" },
      public: { name: "snowtrace", url: "https://snowtrace.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Boba Token", symbol: "BOBA", decimals: 18 },
    id: 43288,
    name: "Boba Avax",
    network: "Boba Avax",
    rpcUrls: {
      default: "https://replica.avax.boba.network",
      public: "https://replica.avax.boba.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Boba Avax Explorer",
        url: "https://blockexplorer.avax.boba.network",
      },
      public: {
        name: "Boba Avax Explorer",
        url: "https://blockexplorer.avax.boba.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TXL", symbol: "TXL", decimals: 18 },
    id: 45000,
    name: "TXL",
    network: "Autobahn Network",
    rpcUrls: {
      default: "https://rpc.autobahn.network",
      public: "https://rpc.autobahn.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "autobahn explorer",
        url: "https://explorer.autobahn.network",
      },
      public: {
        name: "autobahn explorer",
        url: "https://explorer.autobahn.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "REI", symbol: "REI", decimals: 18 },
    id: 47805,
    name: "REI",
    network: "REI Network",
    rpcUrls: {
      default: "https://rpc.rei.network",
      public: "https://rpc.rei.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "rei-scan", url: "https://scan.rei.network" },
      public: { name: "rei-scan", url: "https://scan.rei.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Jewel", symbol: "JEWEL", decimals: 18 },
    id: 53935,
    name: "DFK",
    network: "DFK Chain",
    rpcUrls: {
      default: "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
      public: "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "ethernal", url: "https://explorer.dfkchain.com" },
      public: { name: "ethernal", url: "https://explorer.dfkchain.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Rei", symbol: "REI", decimals: 18 },
    id: 55555,
    name: "REI",
    network: "REI Chain Mainnet",
    rpcUrls: {
      default: "https://rei-rpc.moonrhythm.io",
      public: "https://rei-rpc.moonrhythm.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "reiscan", url: "https://reiscan.com" },
      public: { name: "reiscan", url: "https://reiscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "DoKEN", symbol: "DKN", decimals: 18 },
    id: 61916,
    name: "DoKEN Super Chain",
    network: "DoKEN Super Chain Mainnet",
    rpcUrls: {
      default: "https://ukrpc.doken.dev",
      public: "https://ukrpc.doken.dev",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "DSC Scan", url: "https://explore.doken.dev" },
      public: { name: "DSC Scan", url: "https://explore.doken.dev" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MultiVAC", symbol: "MTV", decimals: 18 },
    id: 62621,
    name: "MultiVAC",
    network: "MultiVAC Mainnet",
    rpcUrls: {
      default: "https://rpc-eu.mtv.ac",
      public: "https://rpc-eu.mtv.ac",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "MultiVAC Explorer", url: "https://e.mtv.ac" },
      public: { name: "MultiVAC Explorer", url: "https://e.mtv.ac" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "eCredits", symbol: "ECS", decimals: 18 },
    id: 63000,
    name: "ECS",
    network: "eCredits Mainnet",
    rpcUrls: {
      default: "https://rpc.ecredits.com",
      public: "https://rpc.ecredits.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "eCredits MainNet Explorer",
        url: "https://explorer.ecredits.com",
      },
      public: {
        name: "eCredits MainNet Explorer",
        url: "https://explorer.ecredits.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "MCD", symbol: "MCD", decimals: 18 },
    id: 67390,
    name: "SIN",
    network: "SiriusNet",
    rpcUrls: {
      default:
        "https://u0tnafcv6j:o2T045sxuCNXL878RDQLp5__Zj-es2cvdjtgkl4etn0@u0v7kwtvtg-u0wj114sve-rpc.us0-aws.kaleido.io/",
      public:
        "https://u0tnafcv6j:o2T045sxuCNXL878RDQLp5__Zj-es2cvdjtgkl4etn0@u0v7kwtvtg-u0wj114sve-rpc.us0-aws.kaleido.io/",
    },
    blockExplorers: {
      default: {
        name: "siriusnetscan",
        url: "https://siriusnet.tryethernal.com",
      },
      public: {
        name: "siriusnetscan",
        url: "https://siriusnet.tryethernal.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
    id: 70000,
    name: "Thinkium",
    network: "Thinkium Mainnet Chain 0",
    rpcUrls: {
      default: "https://proxy.thinkiumrpc.net/",
      public: "https://proxy.thinkiumrpc.net/",
    },
    blockExplorers: {
      default: { name: "thinkiumscan", url: "https://chain0.thinkiumscan.net" },
      public: { name: "thinkiumscan", url: "https://chain0.thinkiumscan.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
    id: 70001,
    name: "Thinkium",
    network: "Thinkium Mainnet Chain 1",
    rpcUrls: {
      default: "https://proxy1.thinkiumrpc.net/",
      public: "https://proxy1.thinkiumrpc.net/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "thinkiumscan", url: "https://chain1.thinkiumscan.net" },
      public: { name: "thinkiumscan", url: "https://chain1.thinkiumscan.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
    id: 70002,
    name: "Thinkium",
    network: "Thinkium Mainnet Chain 2",
    rpcUrls: {
      default: "https://proxy2.thinkiumrpc.net/",
      public: "https://proxy2.thinkiumrpc.net/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "thinkiumscan", url: "https://chain2.thinkiumscan.net" },
      public: { name: "thinkiumscan", url: "https://chain2.thinkiumscan.net" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
    id: 70103,
    name: "Thinkium",
    network: "Thinkium Mainnet Chain 103",
    rpcUrls: {
      default: "https://proxy103.thinkiumrpc.net/",
      public: "https://proxy103.thinkiumrpc.net/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "thinkiumscan",
        url: "https://chain103.thinkiumscan.net",
      },
      public: {
        name: "thinkiumscan",
        url: "https://chain103.thinkiumscan.net",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "pCKB", symbol: "pCKB", decimals: 18 },
    id: 71402,
    name: "GWT",
    network: "Godwoken Mainnet",
    rpcUrls: {
      default: "https://v1.mainnet.godwoken.io/rpc",
      public: "https://v1.mainnet.godwoken.io/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "GWScout Explorer",
        url: "https://gw-mainnet-explorer.nervosdao.community",
      },
      public: {
        name: "GWScout Explorer",
        url: "https://gw-mainnet-explorer.nervosdao.community",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 73927,
    name: "MVM",
    network: "Mixin Virtual Machine",
    rpcUrls: {
      default: "https://geth.mvm.dev",
      public: "https://geth.mvm.dev",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "mvmscan", url: "https://scan.mvm.dev" },
      public: { name: "mvmscan", url: "https://scan.mvm.dev" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "RESIN", decimals: 18 },
    id: 75000,
    name: "RESIN",
    network: "ResinCoin Mainnet",
    rpcUrls: {
      default: "https://mainnet.resincoin.dev",
      public: "https://mainnet.resincoin.dev",
    },
    blockExplorers: {
      default: { name: "ResinScan", url: "https://explorer.resincoin.dev" },
      public: { name: "ResinScan", url: "https://explorer.resincoin.dev" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ivar", symbol: "IVAR", decimals: 18 },
    id: 88888,
    name: "IVAR",
    network: "IVAR Chain Mainnet",
    rpcUrls: {
      default: "https://mainnet-rpc.ivarex.com",
      public: "https://mainnet-rpc.ivarex.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "ivarscan", url: "https://ivarscan.com" },
      public: { name: "ivarscan", url: "https://ivarscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "UBC", symbol: "UBC", decimals: 18 },
    id: 99999,
    name: "USC",
    network: "UB Smart Chain",
    rpcUrls: {
      default: "https://rpc.uschain.network",
      public: "https://rpc.uschain.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100000,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Root",
    rpcUrls: {
      default: "http://jrpc.mainnet.quarkchain.io:38391",
      public: "http://jrpc.mainnet.quarkchain.io:38391",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100001,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 0",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39000",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39000",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/0",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/0",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100002,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 1",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39001",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39001",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/1",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/1",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100003,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 2",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39002",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39002",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/2",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/2",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100004,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 3",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39003",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39003",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/3",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/3",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100005,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 4",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39004",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39004",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/4",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/4",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100006,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 5",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39005",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39005",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/5",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/5",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100007,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 6",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39006",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39006",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/6",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/6",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 100008,
    name: "QuarkChain",
    network: "QuarkChain Mainnet Shard 7",
    rpcUrls: {
      default: "http://eth-jrpc.mainnet.quarkchain.io:39007",
      public: "http://eth-jrpc.mainnet.quarkchain.io:39007",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/7",
      },
      public: {
        name: "quarkchain-mainnet",
        url: "https://mainnet.quarkchain.io/7",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "CRFI", symbol: "\u25c8", decimals: 18 },
    id: 103090,
    name: "crystal",
    network: "Crystaleum",
    rpcUrls: {
      default: "https://rpc.crystaleum.org",
      public: "https://rpc.crystaleum.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://scan.crystaleum.org" },
      public: { name: "blockscout", url: "https://scan.crystaleum.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Brother", symbol: "BRO", decimals: 18 },
    id: 108801,
    name: "BRO",
    network: "BROChain Mainnet",
    rpcUrls: {
      default: "http://rpc.brochain.org/mainnet",
      public: "http://rpc.brochain.org/mainnet",
    },
    blockExplorers: {
      default: {
        name: "BROChain Explorer",
        url: "https://explorer.brochain.org",
      },
      public: {
        name: "BROChain Explorer",
        url: "https://explorer.brochain.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110000,
    name: "QuarkChain",
    network: "QuarkChain Devnet Root",
    rpcUrls: {
      default: "http://jrpc.devnet.quarkchain.io:38391",
      public: "http://jrpc.devnet.quarkchain.io:38391",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110001,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 0",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39900",
      public: "http://eth-jrpc.devnet.quarkchain.io:39900",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/0",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/0",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110002,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 1",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39901",
      public: "http://eth-jrpc.devnet.quarkchain.io:39901",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/1",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/1",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110003,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 2",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39902",
      public: "http://eth-jrpc.devnet.quarkchain.io:39902",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/2",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/2",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110004,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 3",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39903",
      public: "http://eth-jrpc.devnet.quarkchain.io:39903",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/3",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/3",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110005,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 4",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39904",
      public: "http://eth-jrpc.devnet.quarkchain.io:39904",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/4",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/4",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110006,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 5",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39905",
      public: "http://eth-jrpc.devnet.quarkchain.io:39905",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/5",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/5",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110007,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 6",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39906",
      public: "http://eth-jrpc.devnet.quarkchain.io:39906",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/6",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/6",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
    id: 110008,
    name: "QuarkChain",
    network: "QuarkChain Devnet Shard 7",
    rpcUrls: {
      default: "http://eth-jrpc.devnet.quarkchain.io:39907",
      public: "http://eth-jrpc.devnet.quarkchain.io:39907",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/7",
      },
      public: {
        name: "quarkchain-devnet",
        url: "https://devnet.quarkchain.io/7",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ETND", symbol: "ETND", decimals: 18 },
    id: 131419,
    name: "ETND",
    network: "ETND Chain Mainnets",
    rpcUrls: {
      default: "https://rpc.node1.etnd.pro/",
      public: "https://rpc.node1.etnd.pro/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "etndscan", url: "https://scan.etnd.pro" },
      public: { name: "etndscan", url: "https://scan.etnd.pro" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Akroma Ether", symbol: "AKA", decimals: 18 },
    id: 200625,
    name: "AKA",
    network: "Akroma",
    rpcUrls: {
      default: "https://remote.akroma.io",
      public: "https://remote.akroma.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ATP", symbol: "atp", decimals: 18 },
    id: 201018,
    name: "Alaya",
    network: "Alaya Mainnet",
    rpcUrls: {
      default: "https://openapi.alaya.network/rpc",
      public: "https://openapi.alaya.network/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "alaya explorer", url: "https://scan.alaya.network" },
      public: { name: "alaya explorer", url: "https://scan.alaya.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "LAT", symbol: "lat", decimals: 18 },
    id: 210425,
    name: "PlatON",
    network: "PlatON Mainnet",
    rpcUrls: {
      default: "https://openapi2.platon.network/rpc",
      public: "https://openapi2.platon.network/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "PlatON explorer", url: "https://scan.platon.network" },
      public: { name: "PlatON explorer", url: "https://scan.platon.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ARTIS sigma1 Ether", symbol: "ATS", decimals: 18 },
    id: 246529,
    name: "ARTIS",
    network: "ARTIS sigma1",
    rpcUrls: {
      default: "https://rpc.sigma1.artis.network",
      public: "https://rpc.sigma1.artis.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Caduceus Token", symbol: "CMP", decimals: 18 },
    id: 256256,
    name: "CMP",
    network: "CMP-Mainnet",
    rpcUrls: {
      default: "https://mainnet.block.caduceus.foundation",
      public: "https://mainnet.block.caduceus.foundation",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Mainnet Scan",
        url: "https://mainnet.scan.caduceus.foundation",
      },
      public: {
        name: "Mainnet Scan",
        url: "https://mainnet.scan.caduceus.foundation",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "SoChain", symbol: "$OC", decimals: 18 },
    id: 281121,
    name: "SoChain",
    network: "Social Smart Chain Mainnet",
    rpcUrls: {
      default: "https://socialsmartchain.digitalnext.business",
      public: "https://socialsmartchain.digitalnext.business",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Polis", symbol: "POLIS", decimals: 18 },
    id: 333999,
    name: "Olympus",
    network: "Polis Mainnet",
    rpcUrls: {
      default: "https://rpc.polis.tech",
      public: "https://rpc.polis.tech",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Metal", symbol: "METAL", decimals: 18 },
    id: 381931,
    name: "Metal",
    network: "Metal C-Chain",
    rpcUrls: {
      default: "https://api.metalblockchain.org/ext/bc/C/rpc",
      public: "https://api.metalblockchain.org/ext/bc/C/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "metalscan", url: "https://metalscan.io" },
      public: { name: "metalscan", url: "https://metalscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Metal", symbol: "METAL", decimals: 18 },
    id: 381932,
    name: "Metal",
    network: "Metal Tahoe C-Chain",
    rpcUrls: {
      default: "https://tahoe.metalblockchain.org/ext/bc/C/rpc",
      public: "https://tahoe.metalblockchain.org/ext/bc/C/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "metalscan", url: "https://tahoe.metalscan.io" },
      public: { name: "metalscan", url: "https://tahoe.metalscan.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "KEK", symbol: "KEK", decimals: 18 },
    id: 420420,
    name: "kek",
    network: "Kekchain",
    rpcUrls: {
      default: "https://mainnet.kekchain.com",
      public: "https://mainnet.kekchain.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "blockscout",
        url: "https://mainnet-explorer.kekchain.com",
      },
      public: {
        name: "blockscout",
        url: "https://mainnet-explorer.kekchain.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Dexalot", symbol: "ALOT", decimals: 18 },
    id: 432204,
    name: "DEXALOT",
    network: "Dexalot Subnet",
    rpcUrls: {
      default: "https://subnets.avax.network/dexalot/mainnet/rpc",
      public: "https://subnets.avax.network/dexalot/mainnet/rpc",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Avalanche Subnet Explorer",
        url: "https://subnets.avax.network/dexalot",
      },
      public: {
        name: "Avalanche Subnet Explorer",
        url: "https://subnets.avax.network/dexalot",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OpenCoin", symbol: "OPC", decimals: 10 },
    id: 474142,
    name: "OpenChain",
    network: "OpenChain Mainnet",
    rpcUrls: {
      default:
        "https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539",
      public:
        "https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "SIDE SCAN",
        url: "https://sidescan.luniverse.io/1641349324562974539",
      },
      public: {
        name: "SIDE SCAN",
        url: "https://sidescan.luniverse.io/1641349324562974539",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 513100,
    name: "ETF",
    network: "ethereum Fair",
    rpcUrls: {
      default: "https://rpc.etherfair.org",
      public: "https://rpc.etherfair.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OctaSpace", symbol: "OCTA", decimals: 18 },
    id: 800001,
    name: "OCTA",
    network: "OctaSpace",
    rpcUrls: {
      default: "https://rpc.octa.space",
      public: "https://rpc.octa.space",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.octa.space" },
      public: { name: "blockscout", url: "https://explorer.octa.space" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "APTA", symbol: "APTA", decimals: 18 },
    id: 846000,
    name: "4GN",
    network: "4GoodNetwork",
    rpcUrls: {
      default: "https://chain.deptofgood.com",
      public: "https://chain.deptofgood.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "VS", symbol: "VS", decimals: 18 },
    id: 888888,
    name: "Vision",
    network: "Vision - Mainnet",
    rpcUrls: {
      default: "https://infragrid.v.network/ethereum/compatible",
      public: "https://infragrid.v.network/ethereum/compatible",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Visionscan", url: "https://www.visionscan.org" },
      public: { name: "Visionscan", url: "https://www.visionscan.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Posichain Native Token",
      symbol: "POSI",
      decimals: 18,
    },
    id: 900000,
    name: "PSC",
    network: "Posichain Mainnet Shard 0",
    rpcUrls: {
      default: "https://api.s0.posichain.org",
      public: "https://api.s0.posichain.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Posichain Explorer",
        url: "https://explorer.posichain.org",
      },
      public: {
        name: "Posichain Explorer",
        url: "https://explorer.posichain.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Posichain Native Token",
      symbol: "POSI",
      decimals: 18,
    },
    id: 920000,
    name: "PSC",
    network: "Posichain Devnet Shard 0",
    rpcUrls: {
      default: "https://api.s0.d.posichain.org",
      public: "https://api.s0.d.posichain.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Posichain Explorer Devnet",
        url: "https://explorer-devnet.posichain.org",
      },
      public: {
        name: "Posichain Explorer Devnet",
        url: "https://explorer-devnet.posichain.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "Posichain Native Token",
      symbol: "POSI",
      decimals: 18,
    },
    id: 920001,
    name: "PSC",
    network: "Posichain Devnet Shard 1",
    rpcUrls: {
      default: "https://api.s1.d.posichain.org",
      public: "https://api.s1.d.posichain.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Posichain Explorer Devnet",
        url: "https://explorer-devnet.posichain.org",
      },
      public: {
        name: "Posichain Explorer Devnet",
        url: "https://explorer-devnet.posichain.org",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ELV", symbol: "ELV", decimals: 18 },
    id: 955305,
    name: "Eluvio",
    network: "Eluvio Content Fabric",
    rpcUrls: {
      default: "https://host-64-235-250-98.contentfabric.io/eth/",
      public: "https://host-64-235-250-98.contentfabric.io/eth/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.eluv.io" },
      public: { name: "blockscout", url: "https://explorer.eluv.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Etho Protocol", symbol: "ETHO", decimals: 18 },
    id: 1313114,
    name: "ETHO",
    network: "Etho Protocol",
    rpcUrls: {
      default: "https://rpc.ethoprotocol.com",
      public: "https://rpc.ethoprotocol.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "blockscout", url: "https://explorer.ethoprotocol.com" },
      public: { name: "blockscout", url: "https://explorer.ethoprotocol.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Xerom Ether", symbol: "XERO", decimals: 18 },
    id: 1313500,
    name: "XERO",
    network: "Xerom",
    rpcUrls: {
      default: "https://rpc.xerom.org",
      public: "https://rpc.xerom.org",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Plian Token", symbol: "PI", decimals: 18 },
    id: 2099156,
    name: "Plian",
    network: "Plian Mainnet Main",
    rpcUrls: {
      default: "https://mainnet.plian.io/pchain",
      public: "https://mainnet.plian.io/pchain",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "piscan", url: "https://piscan.plian.org/pchain" },
      public: { name: "piscan", url: "https://piscan.plian.org/pchain" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Imversed Token", symbol: "IMV", decimals: 18 },
    id: 5555555,
    name: "Imversed",
    network: "Imversed Mainnet",
    rpcUrls: {
      default: "https://ws-jsonrpc.imversed.network",
      public: "https://ws-jsonrpc.imversed.network",
    },
    blockExplorers: {
      default: {
        name: "Imversed EVM explorer (Blockscout)",
        url: "https://txe.imversed.network",
      },
      public: {
        name: "Imversed EVM explorer (Blockscout)",
        url: "https://txe.imversed.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Musicoin", symbol: "MUSIC", decimals: 18 },
    id: 7762959,
    name: "MUSIC",
    network: "Musicoin",
    rpcUrls: {
      default: "https://mewapi.musicoin.tw",
      public: "https://mewapi.musicoin.tw",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Plian Token", symbol: "PI", decimals: 18 },
    id: 8007736,
    name: "Plian",
    network: "Plian Mainnet Subchain 1",
    rpcUrls: {
      default: "https://mainnet.plian.io/child_0",
      public: "https://mainnet.plian.io/child_0",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "piscan", url: "https://piscan.plian.org/child_0" },
      public: { name: "piscan", url: "https://piscan.plian.org/child_0" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "PepChain Churchill Ether",
      symbol: "TPEP",
      decimals: 18,
    },
    id: 13371337,
    name: "PEP",
    network: "PepChain Churchill",
    rpcUrls: {
      default: "https://churchill-rpc.pepchain.io",
      public: "https://churchill-rpc.pepchain.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "IOLite Ether", symbol: "ILT", decimals: 18 },
    id: 18289463,
    name: "ILT",
    network: "IOLite",
    rpcUrls: {
      default: "https://net.iolite.io",
      public: "https://net.iolite.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "SmartMesh Native Token",
      symbol: "SMT",
      decimals: 18,
    },
    id: 20180430,
    name: "Spectrum",
    network: "SmartMesh Mainnet",
    rpcUrls: {
      default: "https://jsonapi1.smartmesh.cn",
      public: "https://jsonapi1.smartmesh.cn",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "spectrum", url: "https://spectrum.pub" },
      public: { name: "spectrum", url: "https://spectrum.pub" },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "quarkblockchain Native Token",
      symbol: "QKI",
      decimals: 18,
    },
    id: 20181205,
    name: "QKI",
    network: "quarkblockchain",
    rpcUrls: {
      default: "https://jp.rpc.qkiscan.io",
      public: "https://jp.rpc.qkiscan.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Excelon", symbol: "xlon", decimals: 18 },
    id: 22052002,
    name: "XLON",
    network: "Excelon Mainnet",
    rpcUrls: {
      default: "https://edgewallet1.xlon.org/",
      public: "https://edgewallet1.xlon.org/",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Excelon explorer", url: "https://explorer.excelon.io" },
      public: { name: "Excelon explorer", url: "https://explorer.excelon.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Exlcoin", symbol: "EXL", decimals: 18 },
    id: 27082022,
    name: "EXL",
    network: "Excoincial Chain Mainnet",
    rpcUrls: {
      default: "https://rpc.exlscan.com",
      public: "https://rpc.exlscan.com",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "exlscan", url: "https://exlscan.com" },
      public: { name: "exlscan", url: "https://exlscan.com" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Auxilium coin", symbol: "AUX", decimals: 18 },
    id: 28945486,
    name: "AUX",
    network: "Auxilium Network Mainnet",
    rpcUrls: {
      default: "https://rpc.auxilium.global",
      public: "https://rpc.auxilium.global",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "JOYS", symbol: "JOYS", decimals: 18 },
    id: 35855456,
    name: "JOYS",
    network: "Joys Digital Mainnet",
    rpcUrls: {
      default: "https://node.joys.digital",
      public: "https://node.joys.digital",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Aquachain Ether", symbol: "AQUA", decimals: 18 },
    id: 61717561,
    name: "AQUA",
    network: "Aquachain",
    rpcUrls: {
      default: "https://tx.aquacha.in/api",
      public: "https://tx.aquacha.in/api",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Gather", symbol: "GTH", decimals: 18 },
    id: 192837465,
    name: "GTH",
    network: "Gather Mainnet Network",
    rpcUrls: {
      default: "https://mainnet.gather.network",
      public: "https://mainnet.gather.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Blockscout", url: "https://explorer.gather.network" },
      public: { name: "Blockscout", url: "https://explorer.gather.network" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
    id: 245022926,
    name: "Solana",
    network: "Neon EVM DevNet",
    rpcUrls: {
      default: "https://devnet.neonevm.org",
      public: "https://devnet.neonevm.org",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "native", url: "https://devnet.explorer.neon-labs.org" },
      public: { name: "native", url: "https://devnet.explorer.neon-labs.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
    id: 245022934,
    name: "Solana",
    network: "Neon EVM MainNet",
    rpcUrls: {
      default: "https://mainnet.neonevm.org",
      public: "https://mainnet.neonevm.org",
    },
    blockExplorers: {
      default: {
        name: "native",
        url: "https://mainnet.explorer.neon-labs.org",
      },
      public: { name: "native", url: "https://mainnet.explorer.neon-labs.org" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "OLT", symbol: "OLT", decimals: 18 },
    id: 311752642,
    name: "OLT",
    network: "OneLedger Mainnet",
    rpcUrls: {
      default: "https://mainnet-rpc.oneledger.network",
      public: "https://mainnet-rpc.oneledger.network",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "OneLedger Block Explorer",
        url: "https://mainnet-explorer.oneledger.network",
      },
      public: {
        name: "OneLedger Block Explorer",
        url: "https://mainnet-explorer.oneledger.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Gather", symbol: "GTH", decimals: 18 },
    id: 486217935,
    name: "GTH",
    network: "Gather Devnet Network",
    rpcUrls: {
      default: "https://devnet.gather.network",
      public: "https://devnet.gather.network",
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://devnet-explorer.gather.network",
      },
      public: {
        name: "Blockscout",
        url: "https://devnet-explorer.gather.network",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    id: 503129905,
    name: "staging-faint-slimy-achird",
    network: "Nebula Staging",
    rpcUrls: {
      default:
        "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
      public: "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "nebula",
        url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
      },
      public: {
        name: "nebula",
        url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: {
      name: "IPOS Network Ether",
      symbol: "IPOS",
      decimals: 18,
    },
    id: 1122334455,
    name: "IPOS",
    network: "IPOS Network",
    rpcUrls: {
      default: "https://rpc2.iposlab.com",
      public: "https://rpc2.iposlab.com",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 1313161554,
    name: "NEAR",
    network: "Aurora Mainnet",
    rpcUrls: {
      default: "https://mainnet.aurora.dev",
      public: "https://mainnet.aurora.dev",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "aurorascan.dev", url: "https://aurorascan.dev" },
      public: { name: "aurorascan.dev", url: "https://aurorascan.dev" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    id: 1482601649,
    name: "green-giddy-denebola",
    network: "Nebula Mainnet",
    rpcUrls: {
      default: "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
      public: "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "nebula",
        url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
      },
      public: {
        name: "nebula",
        url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
    id: 1564830818,
    name: "honorable-steel-rasalhague",
    network: "Calypso NFT Hub (SKALE)",
    rpcUrls: {
      default: "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
      public: "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
      },
      public: {
        name: "Blockscout",
        url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
    id: 1666600000,
    name: "Harmony",
    network: "Harmony Mainnet Shard 0",
    rpcUrls: {
      default: "https://api.s0.t.hmny.io",
      public: "https://api.s0.t.hmny.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: {
        name: "Harmony Block Explorer",
        url: "https://explorer.harmony.one",
      },
      public: {
        name: "Harmony Block Explorer",
        url: "https://explorer.harmony.one",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
    id: 1666600001,
    name: "Harmony",
    network: "Harmony Mainnet Shard 1",
    rpcUrls: {
      default: "https://api.s1.t.hmny.io",
      public: "https://api.s1.t.hmny.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
    id: 1666600002,
    name: "Harmony",
    network: "Harmony Mainnet Shard 2",
    rpcUrls: {
      default: "https://api.s2.t.hmny.io",
      public: "https://api.s2.t.hmny.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
    id: 1666600003,
    name: "Harmony",
    network: "Harmony Mainnet Shard 3",
    rpcUrls: {
      default: "https://api.s3.t.hmny.io",
      public: "https://api.s3.t.hmny.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
    id: 1666900000,
    name: "Harmony",
    network: "Harmony Devnet Shard 0",
    rpcUrls: {
      default: "https://api.s1.ps.hmny.io",
      public: "https://api.s1.ps.hmny.io",
    },
    blockExplorers: {
      default: {
        name: "Harmony Block Explorer",
        url: "https://explorer.ps.hmny.io",
      },
      public: {
        name: "Harmony Block Explorer",
        url: "https://explorer.ps.hmny.io",
      },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "DataHoppers", symbol: "HOP", decimals: 18 },
    id: 2021121117,
    name: "HOP",
    network: "DataHopper",
    rpcUrls: {
      default: "https://23.92.21.121:8545",
      public: "https://23.92.21.121:8545",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Pirl Ether", symbol: "PIRL", decimals: 18 },
    id: 3125659152,
    name: "PIRL",
    network: "Pirl",
    rpcUrls: {
      default: "https://wallrpc.pirl.io",
      public: "https://wallrpc.pirl.io",
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "PALM", symbol: "PALM", decimals: 18 },
    id: 11297108109,
    name: "Palm",
    network: "Palm",
    rpcUrls: {
      infura: "https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}",
      default: "https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}",
      public: "https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Palm Explorer", url: "https://explorer.palm.io" },
      public: { name: "Palm Explorer", url: "https://explorer.palm.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Ntity", symbol: "NTT", decimals: 18 },
    id: 197710212030,
    name: "Ntity",
    network: "Ntity Mainnet",
    rpcUrls: {
      default: "https://rpc.ntity.io",
      public: "https://rpc.ntity.io",
    },
    multicall: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0,
    },
    blockExplorers: {
      default: { name: "Ntity Blockscout", url: "https://blockscout.ntity.io" },
      public: { name: "Ntity Blockscout", url: "https://blockscout.ntity.io" },
    },
    testnet: false,
  },
  {
    nativeCurrency: { name: "Molereum Ether", symbol: "MOLE", decimals: 18 },
    id: 6022140761023,
    name: "ETH",
    network: "Molereum Network",
    rpcUrls: {
      default: "https://molereum.jdubedition.com",
      public: "https://molereum.jdubedition.com",
    },
    testnet: false,
  },
];
