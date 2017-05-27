import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertaService } from './alerta.service';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

@NgModule({ //Para determinar ao Angular 2 que a classe AppModule seja considerada como uma classe de configuração de módulo, temos de colocar o decorador @ngModule
  declarations: [ //todas as classes e componentes que criaremos
    AppComponent,
    ListaPessoaComponent
  ],
  imports: [ //módulos internos do Angular 2 e de terceiros
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlertaService],//Declarar todos os servicos disponiveis na aplicao
  bootstrap: [AppComponent]//Declarar por qual componente inicia o projeto
})
export class AppModule { }
