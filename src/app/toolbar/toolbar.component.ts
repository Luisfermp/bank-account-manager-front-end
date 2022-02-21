import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AccountMovementComponent } from '../account-movement/account-movement.component';
import { ShareDataService } from '../services/share-data.service';
import { AccountBalance } from '../models/account-balance';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public data?: AccountBalance

  constructor(
    public dialog: MatDialog,
    public serviceData: ShareDataService
  ) { }

  ngOnInit(): void {
    this.serviceData.currentAccountBalance.subscribe((d) => (this.data=d as AccountBalance))
  }

  onClick() {
    const dialogRef = this.dialog.open(AccountMovementComponent, {
      width: '400px',
      // disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  get accountId() {
    if (!this.data?.id) return '-'
    return this.data?.id < 0  ? '-': this.data.id
  }

  get balance() {
    if (this.data && typeof this.data.balance !== 'number') return '- €'
    return `${this.data?.balance.toFixed(2)} €`
  }

}
