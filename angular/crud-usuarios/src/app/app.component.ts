import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud-usuarios';
  exemplo = 'j0sios'


protected onSave(){
  console.log('clicado')
}

teste(){
  console.log('oiajoaij')
}
}
