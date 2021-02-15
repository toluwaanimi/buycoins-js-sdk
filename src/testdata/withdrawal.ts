export const getAllBankAccounts = {
  data: {
    getBankAccounts: [
      {
        accountName: 'emmanuel toluwanimi adebayo',
        accountType: 'withdrawal',
        accountNumber: '1101551084',
        accountReference: null,
        id: 'QmFua0FjY291bnQtODQyZjc0OTEtYTQxYi00YTI0LWJkYTEtODljMjJjY2ZiZTBi',
        bankName: 'Kuda Bank',
      },
      {
        accountName: 'adebayo, emmanuel toluwanimi',
        accountType: 'withdrawal',
        accountNumber: '2086153506',
        accountReference: null,
        id: 'QmFua0FjY291bnQtM2FhNjdjODgtMDc5Ni00YmNkLTgzNGQtNDIxMGRmZTAzNDc3',
        bankName: 'United Bank For Africa',
      },
    ],
  },
};

export const getSingleBankAccount = {
  data: {
    getBankAccounts: [
      {
        accountName: 'adebayo, emmanuel toluwanimi',
        accountType: 'withdrawal',
        accountNumber: '2086153506',
        accountReference: null,
        id: 'QmFua0FjY291bnQtM2FhNjdjODgtMDc5Ni00YmNkLTgzNGQtNDIxMGRmZTAzNDc3',
        bankName: 'United Bank For Africa',
      },
    ],
  },
};

export const withdrawalError = {
  message: 'Withdrawal is currently unavailable',
  locations: [
    {
      line: 2,
      column: 3,
    },
  ],
  path: ['createWithdrawal'],
};
