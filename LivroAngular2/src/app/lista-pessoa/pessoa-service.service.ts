import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  constructor() { }

  getPessoas(): string[] {
  	return['João', 'Maria', 'Angular 2', 'Alan Andrade']
  }

}
