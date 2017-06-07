import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

	@Input() menu: string;
	//O Input() é uma propriedade no Angular 2 que serve para passar o valor do componente pai para o componente filho. Ele é muito parecido com o ng-content

	@Output() nomeClicado = new EventEmitter();
	//somente funciona em conjunto com o evento EventEmitter() , então, para esta variável poder emitir as informações para o componente pai, ela deve ser instanciada como uma emissora de eventos.

	constructor() { }

	ngOnInit() {
  	}

  	enviarNome(item) { //Método será responsavel por emitir o nome do elemento clicado
  		this.nomeClicado.emit(value); //que será responsável por notificar o componente pai sobre a emissão do evento do EventEmitter()
  		//Dessa forma, estamos emitindo pela variável nomeClidado o valor que foi passado pelo parâmetro value
  	}
}