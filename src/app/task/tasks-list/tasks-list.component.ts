import { Component, Input, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from '../../shared/services/database.service';
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
	text = 'This is a text';
	@Input() set tasks(tasks: Task[]) {
		this.dataSource = JSON.parse(JSON.stringify(tasks)); // This is to avoid mutating the original array
		this.databaseService.taskNotifier(this.dataSource.length)
	};

	constructor(private databaseService: DatabaseService,
				public router: Router,
				public activatedRoute: ActivatedRoute) { }

	protected addTask(): void {
		// this.databaseService.taskNotifier(this.dataSource.length); // This is to notify other listeners that a task has been added
		this.router.navigate([`task/new`], { relativeTo: this.activatedRoute.parent?.parent });
	}

	public rowClicked(id: number): void {
		this.router.navigate([`task/${id}`], { relativeTo: this.activatedRoute.parent?.parent });
	}
}
