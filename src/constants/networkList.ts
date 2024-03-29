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
import moonbeam from "@assets/networks/moonbeam.webp";
import { StaticImageData } from "next/image";

export interface IChain extends Chain {
  icon?: StaticImageData;
}

export const Chains: IChain[] = [
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 1,
    name: "ETH",
    network: "Ethereum Mainnet",
    rpcUrls: {
      infura: { http: ["https://mainnet.infura.io/v3/${INFURA_API_KEY}"] },
      default: { http: ["https://cloudflare-eth.com"] },
      public: { http: ["https://cloudflare-eth.com"] },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "etherscan", url: "https://etherscan.io" },
      public: { name: "etherscan", url: "https://etherscan.io" },
    },
    testnet: false,
    icon: eth,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 10,
    name: "ETH",
    network: "Optimism",
    rpcUrls: {
      default: { http: ["https://mainnet.optimism.io/"] },
      public: { http: ["https://mainnet.optimism.io/"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "etherscan", url: "https://optimistic.etherscan.io" },
      public: { name: "etherscan", url: "https://optimistic.etherscan.io" },
    },
    testnet: false,
    icon: optimism,
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
      default: { http: ["https://bsc-dataseed4.ninicoin.io"] },
      public: { http: ["https://bsc-dataseed4.ninicoin.io"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "bscscan", url: "https://bscscan.com" },
      public: { name: "bscscan", url: "https://bscscan.com" },
    },
    testnet: false,
    icon: bsc,
  },
  {
    nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
    id: 100,
    name: "GNO",
    network: "Gnosis",
    rpcUrls: {
      default: { http: ["https://gnosis-mainnet.public.blastapi.io"] },
      public: { http: ["https://gnosis-mainnet.public.blastapi.io"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "gnosisscan", url: "https://gnosisscan.io" },
      public: { name: "gnosisscan", url: "https://gnosisscan.io" },
    },
    testnet: false,
    icon: gnosis,
  },
  {
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    id: 137,
    name: "Polygon",
    network: "Polygon Mainnet",
    rpcUrls: {
      default: { http: ["https://polygon-bor.publicnode.com"] },
      public: { http: ["https://polygon-bor.publicnode.com"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "polygonscan", url: "https://polygonscan.com" },
      public: { name: "polygonscan", url: "https://polygonscan.com" },
    },
    testnet: false,
    icon: polygon,
  },
  {
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
    id: 250,
    name: "Fantom",
    network: "Fantom Opera",
    rpcUrls: {
      default: { http: ["https://rpc.ftm.tools"] },
      public: { http: ["https://rpc.ftm.tools"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "ftmscan", url: "https://ftmscan.com" },
      public: { name: "ftmscan", url: "https://ftmscan.com" },
    },
    testnet: false,
    icon: fantom,
  },
  // {
  //   nativeCurrency: { name: "Moonriver", symbol: "MOVR", decimals: 18 },
  //   id: 1285,
  //   name: "MOON",
  //   network: "Moonriver",
  //   rpcUrls: {
  //     default: { http: ["https://rpc.api.moonriver.moonbeam.network"] },
  //     public: { http: ["https://rpc.api.moonriver.moonbeam.network"] },
  //   },
  //   contracts: {
  //     multicall3: {
  //       address: "0xcA11bde05977b3631167028862bE2a173976CA11",
  //       blockCreated: 0,
  //     },
  //   },
  //   blockExplorers: {
  //     default: { name: "moonscan", url: "https://moonriver.moonscan.io" },
  //     public: { name: "moonscan", url: "https://moonriver.moonscan.io" },
  //   },
  //   testnet: false,
  // },
  {
    nativeCurrency: { name: "Glimmer", symbol: "GLMR", decimals: 18 },
    id: 1284,
    name: "Moonbeam",
    network: "Moonbeam",
    rpcUrls: {
      default: { http: ["https://rpc.api.moonbeam.network"] },
      public: { http: ["https://rpc.api.moonbeam.network"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "moonscan", url: "https://moonbeam.moonscan.io" },
      public: { name: "moonscan", url: "https://moonbeam.moonscan.io" },
    },
    testnet: false,
    icon: moonbeam,
  },
  {
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    id: 43114,
    name: "AVAX",
    network: "Avalanche C-Chain",
    rpcUrls: {
      default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
      public: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "snowtrace", url: "https://snowtrace.io" },
      public: { name: "snowtrace", url: "https://snowtrace.io" },
    },
    testnet: false,
    icon: avalache,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 42161,
    name: "ETH",
    network: "Arbitrum One",
    rpcUrls: {
      infura: {
        http: ["https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}"],
      },
      default: { http: ["https://arb1.arbitrum.io/rpc"] },
      public: { http: ["https://arb1.arbitrum.io/rpc"] },
      alchemy: {
        http: ["https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}"],
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "Arbiscan", url: "https://arbiscan.io" },
      public: { name: "Arbiscan", url: "https://arbiscan.io" },
    },
    testnet: false,
    icon: arbitrum,
  },
  {
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    id: 1313161554,
    name: "Aurora",
    network: "Aurora Mainnet",
    rpcUrls: {
      default: {
        http: ["https://mainnet.aurora.dev"],
      },
      public: {
        http: ["https://mainnet.aurora.dev"],
      },
    },
    contracts: {
      multicall3: {
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: "aurorascan.dev", url: "https://aurorascan.dev" },
      public: { name: "aurorascan.dev", url: "https://aurorascan.dev" },
    },
    testnet: false,
    icon: aurora,
  },
];
