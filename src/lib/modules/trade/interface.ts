
export enum side {
    Buy = "buy",
    Sell = "sell",
}

export interface IGetOrderOpts {
    status: string
}

export interface IPlaceLimitOrderOpts {
    orderSide: side,
    amount: number,
    crypto: string,
    priceType: string
    staticPrice?: number,
    dynamicExchangeRate?: number,
}

export interface IMarketOrderOpts {
    orderSide: string,
    amount: number,
    crypto: string,
}