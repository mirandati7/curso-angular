import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FabricanteService } from './fabricante.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private _service: FabricanteService) { }

  ngOnInit(): void {
  }

  fabricanteForm = this.fb.group({
    id: [''],
    name: [''],
    observacao: [''],
  })

  save(){
    let preview = JSON.stringify(this.fabricanteForm.value);
    console.log(preview);
    this._service.save(this.fabricanteForm.value).subscribe(res => {
      alert("Salvo com sucesso");
    })
  }


}
