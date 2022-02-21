import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AppComponent } from '../app.component';
import { AccountBalanceService } from '../services/account-balance.service';
import { ShareDataService } from '../services/share-data.service';
import { AccountBalance } from '../models/account-balance';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-init-account-popup',
  templateUrl: './init-account-popup.component.html',
  styleUrls: ['./init-account-popup.component.scss']
})
export class InitAccountPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { accountId: number },
    public accountBalanceService: AccountBalanceService,
    public shareDataService: ShareDataService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.accountBalanceService.createAccountBalance(this.data.accountId, 0).subscribe(() => {
      this.shareDataService.updateAccountBalance({ id: this.data.accountId, balance: 0} as AccountBalance)
      this.dialogRef.close()
    }, ({error }) => {
      this.openSnackBar(error.message)
    })
  }

  search() {
    this.accountBalanceService.getAccountBalance(this.data.accountId).subscribe((data) => {
      this.shareDataService.updateAccountBalance(data)
      this.dialogRef.close()
    }, ({ error }) => {
      this.openSnackBar(error.message)
    })
  }

   openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
    });
  }

}
