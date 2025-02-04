import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header.component"

@Component({
  selector: 'app-root', // a tag que chamamos quando queremos usar esse componente em outros lugares
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html', // html a ser mostrado desse componente
  styleUrl: './app.component.css' // a estilização desse componente
})
export class AppComponent {
  title = 'first-angular-app';
}
