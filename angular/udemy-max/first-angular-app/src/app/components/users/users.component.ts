import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  public users = signal(DUMMY_USERS)

  ngOnInit() {
    console.log(this.users);
  }

  teste(event: any) {
    console.log(event)
  }
}
