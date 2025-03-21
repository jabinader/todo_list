import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-by-id',
  templateUrl: './task-by-id.component.html',
  styleUrl: './task-by-id.component.sass',
  standalone: false
})
export class TaskByIdComponent {
  task: Task | undefined;
  taskName = '';
  assignee = '';
  constructor(private tasksService: TasksService) { }

  @Input() set taskId(taskId: number) {
    this.task = this.tasksService.getTaskById(+taskId);
    this.taskName = this.task?.taskName || '';
    this.assignee = this.task?.assignee || '';
  }
}
