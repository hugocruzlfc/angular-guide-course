import { Component } from '@angular/core';
import { HeaderComponent } from '@/app/features/header/header.component';
import { UserComponent } from './features/user/user.component';
import { USERS } from './shared/constants';
import { TaskComponent } from './features/task.component/task.component';
import { User } from './shared/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
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
