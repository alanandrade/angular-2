import { Component, OnInit } from '@angular/core';
import { NomesTecService } from './nomes-tec.service';
import { MeuLogService } from './meu-log.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

    tecnologias: string [] = [];
    meuService: NomesTecService;
    meuLog: MeuLogService;

  	constructor() {	
  	}

  	ngOnInit() {
  	}

}
