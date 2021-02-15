import { createMockClient } from 'mock-apollo-client';
import { orderRequest } from '../lib/modules/order/orderRequest';
import Order from '../lib/modules/order';
import { priceData } from '../testdata/order';

describe('Order', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let mockClient: any;
  const mockQuery = jest.fn();
  let order: Order;
  beforeEach(() => {
    mockClient = createMockClient();
    order = new Order(mockClient);
    mockQuery.mockClear();
  });

  test('get prices', async () => {
    const responseHandler = mockQuery.mockResolvedValue(priceData);
    mockClient.setRequestHandler(orderRequest.getAllPrices, responseHandler);
    const response = await order.getPrices();
    expect(responseHandler).toBeCalledTimes(1);
    //  expect(promise).toEqual(priceData);
  });

  test('should buy crypto', async () => {
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(orderRequest.buyCoin, responseHandler);
    const response = await order.buy({
      crypto: 'ethereum',
      price: '1',
      coin_amount: 0.1,
    });
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('should sell crypto', async () => {
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(orderRequest.sellCoin, responseHandler);
    const response = await order.sell({
      crypto: 'ethereum',
      price: '1',
      coin_amount: 0.1,
    });
    expect(responseHandler).toBeCalledTimes(1);
  });
});
