import type { IToken } from "@store/store";

export interface ITransaction {
  chainId: number;
  userAddress: string;
  labels?: ITransactionLabel[];
  blockNumber: string;
  timeStamp: number;
  hash: string;
  nonce: string;
  blockHash: string;
  fromAddress: string;
  contractAddress: string;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  token?: IToken;
  tokenDecimal: number;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
}

export interface ITransactionLabel {
  title: string;
  value: string;
}
