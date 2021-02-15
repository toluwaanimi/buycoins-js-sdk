import {tradeRequest} from "./tradeRequest";
import {IGetOrderOpts, IMarketOrderOpts} from "./interface";
import BASE from '../../shared/Base';


export default class Trade extends BASE {
    constructor(client: any) {
        super(client)
    }

    getMarketBook() {
        return this.client.query({query: tradeRequest.getMarketBook})
    }

    postMarketOrder(marketOrderOpts: IMarketOrderOpts): Promise<any> {
        return this.client.mutate({mutation: tradeRequest.postMarketOrder, variables: marketOrderOpts})
    }


    getOrdersExpiry(getOrderOpts: IGetOrderOpts): Promise<any> {
        return this.client.query({query: tradeRequest.getOrdersExpiry, variables: getOrderOpts})
    }

    getOrders(getOrderOpts: IGetOrderOpts): Promise<any> {
        return this.client.query({query: tradeRequest.getOrders, variables: getOrderOpts})
    }
}