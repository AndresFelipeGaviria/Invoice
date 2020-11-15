import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['date', 'name', 'total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1, name: 'Azucar', total: 100},
  {date: 2, name: 'Arroz', total: 4036},
  {date: 3, name: 'Aceite', total: 6961},
  {date: 4, name: 'Panela', total: 9022},
  {date: 5, name: 'Vinagre', total: 1061},
  {date: 6, name: 'Carbon', total: 1617,},
  {date: 7, name: 'Nitrogen', total: 14667},
  {date: 8, name: 'Oxigen', total: 1594},
  {date: 9, name: 'Fluorine', total: 1994},
  {date: 10, name: 'Cilantro', total: 20797,},
];
export interface PeriodicElement {
  name: string;
  date: number;
  total: number;
}
export class DatepickerOverviewExample {}
