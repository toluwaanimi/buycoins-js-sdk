import { createMockClient } from 'mock-apollo-client';
import Trade from '../lib/modules/trade';
import { tradeRequest } from '../lib/modules/trade/tradeRequest';
import { walletRequest } from '../lib/modules/wallet/walletRequest';
import { getOrders, getOrdersExpiry, marketBook } from '../testdata/trade';


describe('Trade', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let mockClient: any;
  const mockQuery = jest.fn();
  let trade: Trade;
  beforeEach(() => {
    mockClient = createMockClient();
    trade = new Trade(mockClient);
    mockQuery.mockClear();
  });
  test('get market book', async () => {
    const responseHandler = mockQuery.mockResolvedValue(marketBook);
    mockClient.setRequestHandler(tradeRequest.getMarketBook, responseHandler);
    await trade.getMarketBook();
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('get orders ', async () => {
    const responseHandler = mockQuery.mockResolvedValue(getOrders);
    mockClient.setRequestHandler(tradeRequest.getOrders, responseHandler);
    await trade.getOrders({ status: 'open' });
    expect(responseHandler).toBeCalledTimes(1);

  });

  test('get orders ', async () => {
    const responseHandler = mockQuery.mockResolvedValue(getOrdersExpiry);
    mockClient.setRequestHandler(tradeRequest.getOrdersExpiry, responseHandler);
    await trade.getOrdersExpiry({ status: 'open' });
    expect(responseHandler).toBeCalledTimes(1);
  });
});