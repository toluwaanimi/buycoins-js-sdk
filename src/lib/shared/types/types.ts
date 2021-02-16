
type Direction = "incoming" | "outgoing"

type OnchainTransferRequestStatus = "unconfirmed" | "confirmed" | "flagged" | "failed" | "expired" | "processed" |
  "ready_for_processing" | "processing"

export type ID = string

export type Cryptocurrency = "usd_tether" | "naira_token" | "bitcoin" | "ethereum" | "litecoin" | "usd_coin"

export type OrderSide = "buy" | "sell"

export type PriceType = "static" | "dynamic"

export type OrdersStatus = "open" | "completed"

export type BankAccountTypes = "withdrawal" | "deposit"

export interface BankAccount {
  accountName: string,
  accountNumber: string,
  accountReference?: string,
  accountType: BankAccountTypes,
  bankName: string,
  id: ID,
}




export interface Address {
  address: string,
  createdAt: number,
  cryptocurrency: Cryptocurrency,
  id: ID,
}

export interface OnchainTransferRequest {
  address: string,
  amount: number,
  createdAt: number,
  cryptocurrency: Cryptocurrency,
  fee: number,
  id: ID,
  status: OnchainTransferRequestStatus,
  transaction?: Transaction,
}

export interface Transaction {
  address?: Address,
  amount: number,
  confirmed: boolean,
  createdAt: number,
  cryptocurrency: Cryptocurrency,
  direction: Direction,
  id: ID,
  onchainTransferRequest?: OnchainTransferRequest,
  txhash?: string
}
