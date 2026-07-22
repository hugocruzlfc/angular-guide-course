import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

type TaskStatusOption = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  label: string;
};

export const TaskStatusOptions: TaskStatusOption[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    label: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    label: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    label: 'Done',
  },
];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOption[]>(
  'task-status-options',
);

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};
