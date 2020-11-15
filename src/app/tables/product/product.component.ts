import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Azucar', price: 100},
  {id: 2, name: 'Arroz', price: 4036},
  {id: 3, name: 'Aceite', price: 6961},
  {id: 4, name: 'Panela', price: 9022},
  {id: 5, name: 'Vinagre', price: 1061},
  {id: 6, name: 'Carbon', price: 1617,},
  {id: 7, name: 'Nitrogen', price: 14667},
  {id: 8, name: 'Oxigen', price: 1594},
  {id: 9, name: 'Fluorine', price: 1994},
  {id: 10, name: 'Cilantro', price: 20797,},
];
export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
}
