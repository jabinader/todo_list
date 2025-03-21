import { Component, Input, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from '../../shared/services/database.service';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrl: './tasks-list.component.sass',
	standalone: false
})
export class TasksListComponent {
	dataSource: Task[] = [];
	displayedColumns: string[] = ['taskName', 'assignee'];
	@ViewChild(MatTable) table: MatTable<Task> | undefined;
	taskName = '';
	assignee = '';

	@Input() set tasks(tasks: Task[]) {
		this.dataSource = JSON.parse(JSON.stringify(tasks)); // This is to avoid mutating the original array
		this.databaseService.taskNotifier(this.dataSource.length)
	};

	constructor(private databaseService: DatabaseService,
				private tasksService: TasksService,
				public router: Router,
				public activatedRoute: ActivatedRoute) { }

	protected addTask(): void {
		const task = { id: this.dataSource.length + 1, taskName: this.taskName, assignee: this.assignee };
		this.tasksService.addTask(task);
		this.dataSource.push(task);
		this.table!.renderRows();
		this.databaseService.taskNotifier(this.dataSource.length); // This is to notify other listeners that a task has been added
	}

	public rowClicked(id: number): void {
		this.router.navigate([`task/${id}`], { relativeTo: this.activatedRoute.parent?.parent });
	}
}
