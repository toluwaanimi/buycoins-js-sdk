import { tradeRequest } from './tradeRequest';
import { IGetOrderOpts, IMarketOrderOpts, IPlaceLimitOrderOpts } from './interface';
import BASE from '../../shared/Base';


export default class Trade extends BASE {
  constructor(client: any) {
    super(client);
  }

  getMarketBook() {
    return this.client.query({ query: tradeRequest.getMarketBook });
  }

  postMarketOrder(marketOrderOpts: IMarketOrderOpts): Promise<any> {
    return this.client.mutate({ mutation: tradeRequest.postMarketOrder, variables: marketOrderOpts });
  }


  getOrdersExpiry(getOrderOpts: IGetOrderOpts): Promise<any> {
    return this.client.query({ query: tradeRequest.getOrdersExpiry, variables: getOrderOpts });
  }

  getOrders(getOrderOpts: IGetOrderOpts): Promise<any> {
    return this.client.query({ query: tradeRequest.getOrders, variables: getOrderOpts });
  }

  placeLimitOrder(placeLimitOrderOpts: IPlaceLimitOrderOpts): Promise<any> {
    if (placeLimitOrderOpts.priceType === 'static' && !placeLimitOrderOpts.staticPrice) {
      return Promise.reject({
        status: 422,
        errors: 'field staticPrice required when priceType is static',
      });
    }
    if (placeLimitOrderOpts.priceType === 'dynamic' && !placeLimitOrderOpts.dynamicExchangeRate) {
      return Promise.reject({
        status: 422,
        errors: 'field dynamicExchangeRate required when priceType is dynamic',
      });
    }
    return this.client.mutate({ mutation: tradeRequest.placeLimitOrder, variables: placeLimitOrderOpts });
  }
}