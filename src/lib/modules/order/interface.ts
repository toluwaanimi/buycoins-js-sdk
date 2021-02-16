import { Cryptocurrency, ID } from '../../shared/types/types';

export interface IGetPrices {
    crypto: Cryptocurrency
}


export interface IOrderOptions {
    coin_amount: number,
    price: ID,
    crypto: Cryptocurrency,
}