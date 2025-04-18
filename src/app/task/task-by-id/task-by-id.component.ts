import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-by-id',
  templateUrl: './task-by-id.component.html',
  styleUrl: './task-by-id.component.sass',
  standalone: false
})
export class TaskByIdComponent {
  task: Task | undefined;
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    assignee: new FormControl('', Validators.required),

    // address: new FormArray([
    //   new FormGroup({
    //     city: new FormControl<string>('Beirut'),
    //     street: new FormControl<string>('Hamra'),
    //   }),
    //   new FormGroup({
    //     city: new FormControl<string>('Test'),
    //     street: new FormControl<string>('Jbeil'),
    //   }),
    // ])
  });
  
  constructor(private tasksService: TasksService,
            public router: Router,
            public activatedRoute: ActivatedRoute) { }

  @Input() set taskId(taskId: number) {
    this.task = this.tasksService.getTaskById(+taskId);
    this.taskForm.patchValue(this.task as Task);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.tasksService.addTask(this.taskForm.value as Task);
      this.router.navigate([`list`], { relativeTo: this.activatedRoute.parent?.parent });
    }
  }
}
