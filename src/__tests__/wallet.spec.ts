import { createMockClient } from 'mock-apollo-client';
import Wallet from '../lib/modules/wallet';
import { walletRequest } from '../lib/modules/wallet/walletRequest';
import { createWalletAddress, getAllWalletBalance } from '../testdata/wallet';

describe('Wallet', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let mockClient: any;
  const mockQuery = jest.fn();
  let wallet: Wallet;
  beforeEach(() => {
    mockClient = createMockClient();
    wallet = new Wallet(mockClient);
    mockQuery.mockClear();
  });
  test('create deposit address', async () => {
    const responseHandler = mockQuery.mockResolvedValue(createWalletAddress);
    mockClient.setRequestHandler(walletRequest.createPaymentAddress, responseHandler);
    const response = await wallet.createPaymentAddress({
      crypto: 'ethereum',
    });
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('should get wallet balance', async () => {
    const responseHandler = mockQuery.mockResolvedValue(getAllWalletBalance);
    mockClient.setRequestHandler(walletRequest.getAllBalances, responseHandler);
    const response = await wallet.getWalletBalance();
    expect(responseHandler).toBeCalledTimes(1);
  });
});
