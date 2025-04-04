import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  tasksTable: string[] = [];
  taskCreatedSubject = new Subject<number>();
   private loggedInUser: User | undefined;

  constructor() { }

  saveUser(user: User | undefined): void {
    this.loggedInUser = user;
  }
  getUser(): User | undefined {
    return this.loggedInUser;
  }

  saveTask(taskName: string): void {
    this.tasksTable.push(taskName);
  }

  public taskNotifier(taskCount: number): void {
    this.taskCreatedSubject.next(taskCount);
  }
}
