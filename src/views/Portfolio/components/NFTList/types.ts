// export interface INft {
//   detail: INftDetail;
//   userAddress: string;
//   balance: string;
//   totalSupply: string;
//   price?: string;
//   value?: string;
// }

// export interface INftDetail {
//   address: string;
//   id: string;
//   addressId: string;
//   type: number;
//   name?: string;
//   symbol?: string;
//   description?: string;
//   uri?: string;
//   verified: boolean;
//   chainId: number;
//   deleted: boolean;
// }

export interface INft {
  DeletedAt: string;
  address: string;
  chainId: number;
  createdAt: string;
  logoURI: string;
  meta: string;
  name: string;
  nftID: number;
  owner: string;
  symbol: string;
  totalSupply: string;
  updatedAt: string;
  verify: boolean;
  type: number;
}
