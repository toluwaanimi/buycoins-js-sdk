import { walletRequest } from './walletRequest';
import { createBody, IBalance } from './interface';
import BASE from '../../shared/Base';

export default class Wallet extends BASE {
  constructor(client: any) {
    super(client);
  }

  async createPaymentAddress(createOptions: createBody): Promise<any> {
    return await this.client.mutate({ mutation: walletRequest.createPaymentAddress, variables: createOptions });
  }

  async getWalletBalance(balanceOpts ?: IBalance): Promise<any> {

    if (balanceOpts && balanceOpts?.crypto) {
      return await this.client.query({ query: walletRequest.getBalance, variables: balanceOpts });
    }
    return await this.client.query({ query: walletRequest.getAllBalances });
  }

}