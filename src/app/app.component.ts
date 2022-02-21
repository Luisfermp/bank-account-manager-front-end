import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { InitAccountPopupComponent } from './init-account-popup/init-account-popup.component';
import { ShareDataService } from './services/share-data.service';
import { AccountBalanceService } from './services/account-balance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'bank-account-manager-front-end';

  isIntervalCalled = false

  interval? : any

  accountId: number

  constructor(
    public dialog: MatDialog,
    public shareDataService: ShareDataService,
    public accountBalanceService: AccountBalanceService
    ) {
      this.accountId = -1
    }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  ngAfterViewInit(): void {
    this.openDialog()
    this.shareDataService.currentAccountBalance.subscribe((data: any) => {
      // This just happens once on the lifecycle but, we ensure that don't set
      // more than one interval
      if(!this.isIntervalCalled && typeof data.id === 'number' && data.id >= 0) {
        this.isIntervalCalled = true
        this.accountId = data.id
        this.refreshBalance()
      }
    })
  }

  refreshBalance() {
    this.interval = setInterval(() => {
      this.accountBalanceService.getAccountBalance(this.accountId)
          .subscribe((data) => this.shareDataService.updateAccountBalance(data))
    }, 2500)
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(InitAccountPopupComponent, {
      width: '400px',
      // disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
