import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	meuClick():void {
		console.log('Evento meuClick do botão');
	}

	digitou($event): void{
		console.log($event);
	}

}
