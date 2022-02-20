import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AccountMovementComponent } from '../account-movement/account-movement.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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

}
