import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { DUMMY_USERS } from './components/users/dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', // a tag que chamamos quando queremos usar esse componente em outros lugares
  imports: [
    RouterOutlet,
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html', // html a ser mostrado desse componente
  styleUrl: './app.component.css', // a estilização desse componente
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
