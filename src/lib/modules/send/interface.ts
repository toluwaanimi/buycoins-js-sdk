import { Cryptocurrency } from '../../shared/types/types';

export interface INetworkFee {
  crypto: Cryptocurrency;
  amount: number;
}

export interface ISend {
  amount: number;
  crypto: Cryptocurrency;
  address: string;
}

export interface ISendOffChain {
  amount: number;
  crypto: Cryptocurrency;
  recipient: string;
}
