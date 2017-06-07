import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  foto: string = 'favicon.ico';
  desenvolvimento: string [] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];//Crio o array desenvolvimento e passo o valor para dentro da referencia menu no template cpmponent.html
  valor: string;

  constructor(private service: AlertaService){ }

  //Function do botao de ação de mostrar Alert, declarada dentro de sua class AppComponent
  enviarMsg(): void {
  	this.service.msgAlerta();
  }

  valorPassado(valorPassado){
    this.valor = valorPassado;
  }
}