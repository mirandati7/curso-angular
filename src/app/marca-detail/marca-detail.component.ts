import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MarcaService } from './marca.service';
import { Marca } from './marca.model';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  public marca: Marca = new Marca();
  preview: string = '';

  constructor(private route: ActivatedRoute,
             private location: Location,
             private fb: FormBuilder,
             public _service: MarcaService) { 
        
  }

 
  ngOnInit(): void {
    this.getMarca();
  }


  getMarca(): void {    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Tela recebe parametro via id" + id);

    if (id === 1) {
      this.marca.id   = id; 
      this.marca.name = "Samsung";
    }    
  }

  voltar(): void {
    this.location.back();
  }

  marcaForm = this.fb.group({
    id: [''],
    name: [''],
    observacao: [''],
  })


  save() {
    this.preview = JSON.stringify(this.marcaForm.value);
    console.log(this.preview);
    this._service.save(this.marcaForm.value).subscribe(res => {
      alert(res);
      alert("Salvo com sucesso");
    })
  }


}
