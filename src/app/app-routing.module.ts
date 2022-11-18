import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { MarcaComponent } from './marca/marca.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'marca',   component: MarcaComponent },  
  { path: 'fabricante',   component: FabricanteComponent },
  { path: 'marca-detail/:id', component: MarcaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


