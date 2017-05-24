import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  foto: string = 'favicon.ico';

	msgAlerta(): void {
		alert('Livro Angular 2');
	} //Function do botao de ação de mostrar Alert, declarada dentro de sua class AppComponent
}