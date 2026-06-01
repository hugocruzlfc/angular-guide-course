import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { cn } from '@/app/core/utils';
import { CardComponent } from '@/app/shared/ui/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean = false;
  // @Input({ required: true }) userId!: string;
  // @Input({ required: true }) name!: string;
  @Output() selectUser = new EventEmitter();

  // otra manera de emititir eventos
  //selectUser = output<string>();

  // Initialize props via Signals
  // avatar = input<string>()
  // name = input.required<string>();

  // selectedUser = USERS[randomUserIndex];
  // selectedUser = signal(USERS[randomUserIndex]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  get imagePath(): string {
    // return `assets/users/${this.selectedUser.avatar}`;
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    //const randomUserIndex = Math.floor(Math.random() * USERS.length);
    // this.selectedUser = USERS[randomUserIndex];
    // this.selectedUser.set(USERS[randomUserIndex]);
    this.selectUser.emit(this.user.id);

    // otra manera de emititir eventos
    // this.selectUser.emit(this.userId);
  }

  get buttonClasses(): string {
    return cn(
      'flex items-center gap-2 px-2 py-[0.35rem]',
      'bg-[#433352] text-[#c3b3d1] border-0 font-inherit',
      'cursor-pointer w-full min-w-40 text-left',
      'hover:bg-[#9965dd] hover:text-[#150722]',
      'active:bg-[#9965dd] active:text-[#150722]',
      this.selected && 'ring-2 ring-[#9965dd] bg-[#9965dd] text-[#150722]',
    );
  }
}
