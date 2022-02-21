import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ShareDataService } from '../services/share-data.service';
import { AccountBalanceService } from '../services/account-balance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-movement',
  templateUrl: './account-movement.component.html',
  styleUrls: ['./account-movement.component.scss']
})
export class AccountMovementComponent implements OnInit {

  accountId: number = -1

  constructor(
    public dialogRef: MatDialogRef<ToolbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { amount: any },
    public shareDataService: ShareDataService,
    public accountService: AccountBalanceService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.shareDataService.currentAccountBalance.subscribe((data: any) => (this.accountId = data.id))
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 4000,
    });
  }

  onClick() {
    this.accountService.updateAccountBalance(this.accountId, parseFloat(this.data.amount)).subscribe(() => {
      this.dialogRef.close()
      this.openSnackBar('Balance updated correctly')
    }, ({ error }) => {
      this.openSnackBar(error.message)
    })
  }

}
