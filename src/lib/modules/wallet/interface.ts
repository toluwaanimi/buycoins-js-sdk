import { Cryptocurrency } from '../../shared/types/types';

export interface createBody {
    crypto: Cryptocurrency
}

export interface IBalance {
    crypto?: Cryptocurrency
}
