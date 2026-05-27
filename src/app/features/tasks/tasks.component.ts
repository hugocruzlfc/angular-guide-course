import { User } from '@/app/shared/types';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
}
