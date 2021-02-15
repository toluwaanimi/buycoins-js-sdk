export interface INetworkFee {
  crypto: string;
  amount: number;
}

export interface ISend {
  amount: number;
  crypto: string;
  address: string;
}

export interface ISendOffChain {
  amount: number;
  crypto: string;
  recipient: string;
}
