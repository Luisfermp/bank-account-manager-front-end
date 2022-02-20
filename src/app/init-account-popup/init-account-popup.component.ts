import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-init-account-popup',
  templateUrl: './init-account-popup.component.html',
  styleUrls: ['./init-account-popup.component.scss']
})
export class InitAccountPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { accountId: number }
  ) { }

  ngOnInit(): void {
  }

  create() {
    console.log('Create')
  }

  search() {
    console.log('Search')
  }

}
