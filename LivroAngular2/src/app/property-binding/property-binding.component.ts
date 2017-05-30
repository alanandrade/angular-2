import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  verParagrafo: boolean = true; //Variavel verParagrafo é boolean e inicia com true para mostrar

  constructor() { }

  ngOnInit() {
  }

  mostrar() {//Function Mostrar/Ocultar
    this.verParagrafo = ! this.verParagrafo; //Altera a variavel ao contrário, para false, onde será atribuido o hidden as tags
  }
}