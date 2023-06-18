export interface ICEXBalanceList {
  accounts: string[];
  cexNames: string[];
  freeBalance: number;
  token: string;
  totalBalance: number;
}

export interface ICedeVaults {
  accounts: ICedeAccounts[];
  id: string;
  image: string;
  isActive: boolean;
  name: string;
}

export interface ICedeAccounts {
  accountName: string;
  cexName: string;
  permissions: string[];
  status: boolean;
}

// CEDE Transaction Schema

export type TCexTransactionFrom = {
  account: {
    cexName: string;
    cexId: string;
    accountName: string;
  };
  wallet: {
    depositAddress: string;
    walletType: string;
  };
  transaction: {
    timestamp: number;
    amount: number;
    token: string;
    fee: {
      amount: number;
      token: string;
    };
    status: string;
  };
};

export type TCexTransactionTo = {
  account: {
    name: string;
    network: string;
    address: string;
  };
  transaction: {
    timestamp: number;
    fee: {
      amount: number;
      token: string;
    };
    status: string;
    tokens: [
      {
        amount: number;
        label: string;
        address: string;
      }
    ];
  };
};

export interface ICEXTransaction {
  from: TCexTransactionFrom;
  to: TCexTransactionTo;
  type: string;
}
