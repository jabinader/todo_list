import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TasksService } from './tasks.service';

export const taskResolver: ResolveFn<any> = (route, state) => {
  const taskService = inject(TasksService);
  return taskService.getTasks();
};
