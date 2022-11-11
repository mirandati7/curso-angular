import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Marca } from './marca.model';


@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  public marca:Marca = new Marca();

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMarca(id);
    console.log("Tela Recebendo ..: " + id );
  }

  getMarca(id:Number){
    if (id == 1){
      this.marca.id = 1;
      this.marca.name = "Samsung";
    }
  }

  voltar(){
    this.location.back();
  }

}
