import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AccountBalanceSummary } from 'src/app/models/account-balance-summary'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccountSummaryService {

  constructor(
    private http: HttpClient
  ) { }

  getAccountSummary(accountId: number) {
    return this.http.get<AccountBalanceSummary>(`${environment.accountBankApiBaseUrl}/accounts/${accountId}/summary`)
  }
}
