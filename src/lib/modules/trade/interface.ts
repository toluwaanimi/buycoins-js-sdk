import { Cryptocurrency, OrdersStatus, OrderSide, PriceType } from '../../shared/types/types';

export enum side {
  Buy = 'buy',
  Sell = 'sell',
}

export interface IGetOrderOpts {
  status: OrdersStatus
}

export interface IPlaceLimitOrderOpts {
  orderSide: OrderSide,
  amount: number,
  crypto: Cryptocurrency,
  priceType: PriceType
  staticPrice?: number,
  dynamicExchangeRate?: number,
}

export interface IMarketOrderOpts {
  orderSide: OrderSide,
  amount: number,
  crypto: Cryptocurrency,
}