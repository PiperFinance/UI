import Dexie, { Table } from 'dexie';

export interface Token {
  id: number;
  address: string;
  symbol: string;
  decimal: number;
  name: string;
  chain_id: number;
  logo?: string;
  balance: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  balances!: Table<Token>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      balances: '++id, address, symbol, decimal, name, chain_id, logo, balance', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
