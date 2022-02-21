import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { AccountSummaryService } from '../services/account-summary.service';
import { AccountBalanceSummary, Summary } from '../models/account-balance-summary';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface BalanceSummary {
  date: string;
  amount: number;
  balance: number;
}


@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss']
})
export class SummaryListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['date', 'amount', 'balance'];

  dataSource: Summary[] = [];

  summary?: AccountBalanceSummary

  accountId: number

  interval?: any


  constructor(
    public shareDataService: ShareDataService,
    public accountSummaryService: AccountSummaryService,
    public snackBar: MatSnackBar
  ) {
    this.accountId = -1
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  ngOnInit(): void {
    this.shareDataService.currentAccountBalance.subscribe((data: any) => {
      if(typeof data.id === 'number' && data.id >= 0) {
        this.accountId = data.id
        this.requestSummary()
       }
    }
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
    });
  }

  private setRefreshInterval() {
    this.interval = setInterval(() => {
      this.accountSummaryService.getAccountSummary(this.accountId).subscribe((summary) => {
        this.summary = summary
        this.dataSource = this.summary?.summary ?? []
      }, ({error}) => {
        this.openSnackBar(error.message)
      })
    }, 2500)
  }

  private requestSummary() {
    this.accountSummaryService.getAccountSummary(this.accountId).subscribe((summary) => {
        this.summary = summary
        this.dataSource = this.summary?.summary ?? []
        this.setRefreshInterval()
      }, (error) => {
        this.openSnackBar(error.message)
      })
  }

}
