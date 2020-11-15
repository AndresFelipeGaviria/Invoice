import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  displayedColumns = ['id', 'name', 'telephone', 'address'];
  dataSource = ELEMENT_DATA;
  constructor() { }
 
  ngOnInit(): void {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 13625554, name: 'Hydrogen', telephone: 10034579, address: 'vereda alto bonito'},
  {id: 22546645, name: 'Helium', telephone: 4002356336, address: 'vereda la laja'},
  {id: 32455244, name: 'Lithium', telephone: 693635641, address: 'la mosca'},
  {id: 42566734, name: 'Beryllium', telephone: 90346122, address: 'el cielo'},
  {id: 52445346, name: 'Boron', telephone: 1814561, address: 'la inmaculada'},
  {id: 62455524, name: 'Carbon', telephone: 120456107, address: 'el alto'},
  {id: 72565334, name: 'Nitrogen', telephone: 14046067, address: 'horizontes'},
  {id: 83453443, name: 'Oxygen', telephone: 15956994, address: 'caballoballo'},
  {id: 94575453, name: 'Fluorine', telephone: 18459984, address: 'abreito'},
  {id: 13456630, name: 'Neon', telephone: 205641797, address: 'san jil'},
];
export interface PeriodicElement {
  name: string;
  id: number;
  telephone: number;
  address: string;
}
