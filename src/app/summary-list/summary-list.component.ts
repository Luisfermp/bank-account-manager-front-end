import { Component, OnInit } from '@angular/core';

export interface BalanceSummary {
  date: string;
  amount: number;
  balance: number;
}

const ELEMENT_DATA: BalanceSummary[] = [
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
    {
        date: new Date().toISOString(), amount: -157.5, balance: 10078
    },
];

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss']
})
export class SummaryListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'amount', 'balance'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

}
