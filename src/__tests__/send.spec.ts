import { createMockClient } from 'mock-apollo-client';
import Send from '../lib/modules/send';
import { sendRequest } from '../lib/modules/send/sendRequest';
import { networkFees, sendOffChain } from '../testdata/send';

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
    const responseHandler = mockQuery.mockResolvedValue(networkFees);
    mockClient.setRequestHandler(sendRequest.getNetworkFee, responseHandler);
    const promise = await send.getNetworkFee({
      amount: 0.01,
      crypto: 'bitcoin',
    });
    expect(responseHandler).toBeCalledTimes(1);
    await expect(promise.data).toEqual(networkFees.data);
  });

  test('it should send crypto to an address', async () => {
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(sendRequest.send, responseHandler);
    const response = await send.send({
      address: 'uuurkrkmckmdmcmwkopu8e9w8',
      amount: 0.01,
      crypto: 'bitcoin',
    });
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('should send crypto to a buycoins user by username', async () => {
    const responseHandler = mockQuery.mockResolvedValue(sendOffChain);
    mockClient.setRequestHandler(sendRequest.sendOffChain, responseHandler);
    const response = await send.sendOffChain({
      recipient: 'henadad',
      amount: 0.01,
      crypto: 'bitcoin',
    });
    expect(responseHandler).toBeCalledTimes(1);
    expect(response.data).toEqual(sendOffChain.data);
  });
});
