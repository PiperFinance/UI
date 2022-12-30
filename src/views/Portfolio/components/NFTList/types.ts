export interface INft {
  detail: INftDetail;
  userAddress: string;
  balance: string;
  totalSupply: string;
  price?: string;
  value?: string;
}

export interface INftDetail {
  address: string;
  id: string;
  addressId: string;
  type: number;
  name?: string;
  symbol?: string;
  description?: string;
  uri?: string;
  verified: boolean;
  chainId: number;
  deleted: boolean;
}
