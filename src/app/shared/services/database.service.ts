import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  tasksTable: string[] = [];
  taskCreatedSubject = new Subject<number>();
  constructor() { }

  saveTask(taskName: string): void {
    this.tasksTable.push(taskName);
  }

  public taskNotifier(taskCount: number): void {
    this.taskCreatedSubject.next(taskCount);
  }
}
