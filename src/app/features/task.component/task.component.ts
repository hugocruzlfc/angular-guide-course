import { User } from '@/app/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
})
export class TaskComponent {
  @Input({ required: true }) user?: User;
}
