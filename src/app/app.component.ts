import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { InitAccountPopupComponent } from './init-account-popup/init-account-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'bank-account-manager-front-end';

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.openDialog()
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
