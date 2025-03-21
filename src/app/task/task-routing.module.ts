import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { taskResolver } from './services/task.resolver';
import { TaskByIdComponent } from './task-by-id/task-by-id.component';

const routes: Routes = [
  {path: '', component: TaskComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: TasksListComponent, resolve: {tasks: taskResolver}},
      {path: 'task/:taskId', component: TaskByIdComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

export const routedComponents = [TaskComponent, TasksListComponent, TaskByIdComponent];
