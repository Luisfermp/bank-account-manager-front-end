import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AccountBalance } from '../models/account-balance';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountBalanceService {

  constructor(
    private http: HttpClient
  ) { }

  createAccountBalance(accountId: number, balance: number) {
    return this.http.post<void>(`${environment.accountBankApiBaseUrl}/accounts/${accountId}`, { balance })
  }

  getAccountBalance(accountId: number) {
    return this.http.get<AccountBalance>(`${environment.accountBankApiBaseUrl}/accounts/${accountId}`)
  }

  updateAccountBalance(accountId: number, amount: number) {
    return this.http.put<void>(`${environment.accountBankApiBaseUrl}/accounts/${accountId}`, { amount })
  }
}
