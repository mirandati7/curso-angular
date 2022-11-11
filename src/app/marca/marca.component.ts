import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  marcas:any;

  constructor() {
    console.log("Fluxo da aplicação -> Constructor");
   }

  ngOnInit(): void {
    console.log("Fluxo da aplicação -> onInit ");
    this.marcas = [ { id: 1, name: 'Samsung' },
                    { id: 2, name: 'Dell' },
                    { id: 3, name: 'HP' },
                    { id: 4, name: 'Apple' },
                    { id: 5, name: 'Sony Vaio' },
                    { id: 6, name: 'Logitech' },
                    { id: 7, name: 'Lenovo' },
                    { id: 8, name: 'IBM' },
                    { id: 9, name: 'Microsoft' }];
    console.log(this.marcas);


  }

}
