import { NgModule } from '@angular/core';

import { routedComponents, TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TasksService } from './services/tasks.service';


@NgModule({
  declarations: [routedComponents],
  imports: [
    TaskRoutingModule,
    SharedModule
  ],
  providers: [TasksService]
})
export class TaskModule { }
