import { createMockClient } from 'mock-apollo-client';
import Withdrawal from '../lib/modules/withdrawal';
import { withdrawalRequest } from '../lib/modules/withdrawal/withdrawalRequest';
import { walletRequest } from '../lib/modules/wallet/walletRequest';
import { getAllBankAccounts } from '../testdata/withdrawal';

describe('Withdrawal', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let mockClient: any;
  const mockQuery = jest.fn();
  let withdrawal: Withdrawal;

  beforeEach(() => {
    mockClient = createMockClient();
    withdrawal = new Withdrawal(mockClient);
    mockQuery.mockClear();
  });

  test('initialize a withdrawal', async () => {
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(withdrawalRequest.createWithdrawal, responseHandler);
    const response = await withdrawal.createWithdrawal({
      bankAccount: '',
      amount: 1000,
    });
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('cancel withdrawal', async () => {
    const responseHandler = mockQuery.mockResolvedValue({});
    mockClient.setRequestHandler(withdrawalRequest.cancelWithdrawal, responseHandler);
    await withdrawal.cancelWithdrawal({
      payment: '',
    });
    expect(responseHandler).toBeCalledTimes(1);
  });

  test('get bank accounts', async () => {
    const responseHandler = mockQuery.mockResolvedValue(getAllBankAccounts);
    mockClient.setRequestHandler(withdrawalRequest.getAllBankAccounts, responseHandler);
    const response = await withdrawal.getBankAccounts();
    expect(responseHandler).toBeCalledTimes(1);
    expect(response.data).toEqual(getAllBankAccounts.data)
  });
});
