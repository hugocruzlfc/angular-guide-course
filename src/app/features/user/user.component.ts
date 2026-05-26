import { Component, computed, input, Input, signal } from '@angular/core';
import { USERS } from '@/app/shared/constants';

const randomUserIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // Initialize props via Signals
  // avatar = input<string>()
  name = input.required<string>();

  // selectedUser = USERS[randomUserIndex];
  // selectedUser = signal(USERS[randomUserIndex]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  get imagePath(): string {
    // return `assets/users/${this.selectedUser.avatar}`;
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {
    const randomUserIndex = Math.floor(Math.random() * USERS.length);
    // this.selectedUser = USERS[randomUserIndex];
    // this.selectedUser.set(USERS[randomUserIndex]);
  }
}
