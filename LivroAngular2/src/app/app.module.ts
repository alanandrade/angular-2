import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertaService } from './alerta.service';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DiComponent } from './di/di.component';

@NgModule({ //Para determinar ao Angular 2 que a classe AppModule seja considerada como uma classe de configuração de módulo, temos de colocar o decorador @ngModule
  declarations: [ //todas as classes e componentes que criaremos
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgContentComponent,
    EventBindingComponent,
    InputOutputComponent,
    FormularioComponent,
    DiComponent
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
