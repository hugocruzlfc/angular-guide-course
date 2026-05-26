import { Component } from '@angular/core';
import { USERS } from '@/app/shared/constants';

const randomUserIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
})
export class UserComponent {
  selectedUser = USERS[randomUserIndex];

  get imagePath(): string {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectedUser() {
    const randomUserIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomUserIndex];
  }
}
