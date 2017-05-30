import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

	nome: string = "Alan Andrade";

  	constructor() { }

  	ngOnInit() {
  	}

  	mudar(valor){
  		this.nome = valor + '-'; //Adiciono o novo valor na variavel nome
  	}

}
