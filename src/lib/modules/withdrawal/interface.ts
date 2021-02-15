export interface IBankAccounts {
  accountNumber: string;
}

export interface ICreateWithdrawal {
  bankAccount: string;
  amount: number;
}

export interface ICancelWithdrawal {
  payment: string;
}
