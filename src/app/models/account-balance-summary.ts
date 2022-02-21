export interface AccountBalanceSummary {
  accountId: number,
  summary: Summary[]
}

export interface Summary {
    date: string,
    amount: number,
    balance: number
}
