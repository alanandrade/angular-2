import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	habilitarBotao: boolean = false;

	valores: string [] = [];

	constructor() { }

	ngOnInit() {
	}

	meuClick():void {
		console.log('Evento meuClick do botão');
	}

	digitou($event): void{
		console.log($event);
	}

	digitouVarTemplate(valor): void{
		console.log(valor);
	}

	//O parametro (qtdSenha.value) do template, se torna outro parametro no compenente - Mais podemos usar a variavel do template
	validaSenha(valor: string): void{
		if(valor.length >= 5){
			this.habilitarBotao = true;
		}else{
			this.habilitarBotao = false;
		}
	}

	gravarSenha(senha): void{
		alert("Senha gravada com sucesso, sua senha é: " + senha);
	}

	adicionar(conteudo: string): void {
		this.valores.push(conteudo);
	}

}
