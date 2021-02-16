import { IGetPrices, IOrderOptions } from './interface';
import { orderRequest } from './orderRequest';
import BASE from '../../shared/Base';

export default class Order extends BASE {
  constructor(client: any) {
    super(client);
  }

  async getPrices(getPricesOpts?: IGetPrices): Promise<any> {
    if (getPricesOpts && getPricesOpts.crypto) {
      return this.client.query({ query: orderRequest.getPrice, variables: getPricesOpts });
    }
    return this.client.query({ query: orderRequest.getAllPrices });
  }

  async buy(buyOpts: IOrderOptions) {
    return this.client.mutate({ mutation: orderRequest.buyCoin, variables: buyOpts });
  }


  async sell(sellOpts: IOrderOptions) {
    return this.client.mutate({ mutation: orderRequest.sellCoin, variables: sellOpts });
  }

}