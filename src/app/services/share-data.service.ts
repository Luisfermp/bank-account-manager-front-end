import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { AccountBalance } from '../models/account-balance';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private accountBalanceData = new BehaviorSubject({})

  currentAccountBalance = this.accountBalanceData.asObservable();

  constructor() { }

  updateAccountBalance(data: AccountBalance) {
    console.log(data)
    this.accountBalanceData.next(data)
  }
}
