import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarcaService } from './marca-detail/marca.service';
import { HttpClientModule } from '@angular/common/http';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { FabricanteService } from './fabricante/fabricante.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    MarcaComponent,
    MarcaDetailComponent,
    FabricanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MarcaService ,FabricanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
