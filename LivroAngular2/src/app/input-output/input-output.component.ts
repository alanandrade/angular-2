import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

	@Input() menu: string;
	//O Input() é uma propriedade no Angular 2 que serve para passar o valor do componente pai para o componente filho. Ele é muito parecido com o ng-content

	constructor() { }

	ngOnInit() {
  	}
}