import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NewTaskData, NewTaskSchema, zodValidator } from './new-task.schema';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Output() cancelAddTask = new EventEmitter<void>();
  //   @Output() addTask = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;
  private taskService = inject(TasksService);

  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group(
    { title: [''], summary: [''], dueDate: [''] },
    { validators: zodValidator(NewTaskSchema) },
  );

  getError(field: keyof NewTaskData): string | null {
    const control = this.form.get(field);
    if (!control?.touched) return null;
    return this.form.errors?.['zodErrors']?.[field] ?? null;
  }

  onCancelAddTask(): void {
    this.cancelAddTask.emit();
  }

  //   onSubmit(): void {
  //     if (this.form.invalid) {
  //       this.form.markAllAsTouched();
  //       return;
  //     }
  //     this.addTask.emit(this.form.value as NewTaskData);
  //     this.form.reset();
  //   }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.taskService.addTask(this.form.value as NewTaskData, this.userId);
    this.form.reset();
    this.cancelAddTask.emit();
  }
}
