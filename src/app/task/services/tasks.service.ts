import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class TasksService {
	tasks: Task[] | undefined;
	constructor(private http: HttpClient) { }

	public getTasks(): Observable<Task[]> | Task[] {
		if (this.tasks && this.tasks.length > 0) {
			return this.tasks;
		}
		return this.http.get<Task[]>('/assets/data/tasks-list.json').pipe(
			tap((tasks: Task[]) => this.tasks = tasks)
		);
	}

	public getTaskById(taskId: number): Task | undefined {
		return this.tasks?.find(task => task.id === taskId);
	}

	public addTask(task: Task): void {
		this.tasks?.push(task);
	}
}
