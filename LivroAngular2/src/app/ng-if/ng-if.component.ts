import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

	mostraNome: boolean;
	cursos: string [] = [];

	constructor() { }

	ngOnInit() {
	}

	mostrar():void{
		this.mostraNome = !this.mostraNome;//Altera para o estado contrário e adiciona novamente na variável
	}

	getValor(): boolean{
		return this.mostraNome;
	}//Ira Retornar um boolean da function getValor em mostrarNome

	addCurso() {
		this.cursos.push('Angular 2');//Adiciona um curso dentro do array
	}
}
