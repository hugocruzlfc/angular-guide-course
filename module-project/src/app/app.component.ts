import { Component } from '@angular/core';
import { USERS } from './shared/constants';
import { User } from './features/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: User[] = USERS;
  selectedUser?: User;

  onSelectUser(userId: string) {
    // Find the user by ID and set their name as the selected user name
    const selectedUser = this.users.find((user) => user.id === userId);
    this.selectedUser = selectedUser;
  }
}
