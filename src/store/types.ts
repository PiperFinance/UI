export interface ICEXBalanceList {
  accounts: string[];
  cexNames: string[];
  freeBalance: number;
  ticker: string;
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
