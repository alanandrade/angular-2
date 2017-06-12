import { Injectable } from '@angular/core';

@Injectable()
export class NomesTecService {

   getNomesTec(): string [] {
      this.meulog.setLog('Consultou o array de tecnologias');
      return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML 5', 'CSS 3', 'Desenvolvendo com Angular 2'];
    }

    meuLog = MeuLogService;

	 constructor(meuLog: MeuLogService) {
	   this.meuLog = meulog;//Pega a variavel acima e passa para meuLog
   }
   //declaramos que essa classe precisa de uma instância da MeuLogService, que fica em outro servioço, para funcionar corretamente
}