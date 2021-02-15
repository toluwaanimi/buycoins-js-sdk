import { createMockClient } from 'mock-apollo-client';
import { getBalances, mockClient, networkFees } from '../testdata/testdata';
import Send from '../lib/modules/send';
import { sendRequest } from '../lib/modules/send/sendRequest';

// eslint-disable-next-line no-undef
describe('Send', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let mockClient: any;
  const mockQuery = jest.fn();
  let send: Send;
  beforeEach(() => {
    mockClient = createMockClient();
    send = new Send(mockClient);
    mockQuery.mockClear();
  });

  test('network fee', async () => {
    const options = {
      amount: 0.01,
      crypto: 'bitcoin',
    };
    const responseHandler = mockQuery.mockResolvedValue(networkFees);
    mockClient.setRequestHandler(sendRequest.getNetworkFee, responseHandler);
    const promise = await send.getNetworkFee(options);
    expect(responseHandler).toBeCalledTimes(1);
    await expect(promise.data).toEqual(networkFees.data);
  });

  test('it should send crypto to an address', async () => {
    const options = {
      address: 'uuurkrkmckmdmcmwkopu8e9w8',
      amount: 0.01,
      crypto: 'bitcoin',
    };
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(sendRequest.send, responseHandler);
    const response = await send.send(options);
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('should send crypto to a buycoins user by username', async () => {
    const options = {
      recipient: 'henadad',
      amount: 0.01,
      crypto: 'bitcoin',
    };
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(sendRequest.send, responseHandler);
    const response = await send.sendOffChain(options);
    expect(responseHandler).toBeCalledTimes(1);
  });
});