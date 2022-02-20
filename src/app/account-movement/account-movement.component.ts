import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-account-movement',
  templateUrl: './account-movement.component.html',
  styleUrls: ['./account-movement.component.scss']
})
export class AccountMovementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ToolbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { amount: number }
  ) { }

  ngOnInit(): void {
  }

  onClick() {

  }

}
