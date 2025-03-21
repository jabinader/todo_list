import { Component } from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  standalone: false 
})
export class HomeComponent  {
    constructor(private databaseService: DatabaseService) { }
    taskCount = 0;
    
    ngOnInit(): void {
        this.databaseService.taskCreatedSubject.subscribe((taskCount: number) => {
            this.taskCount = taskCount;
        });
    }

    ngOnDestroy(): void {
        this.databaseService.taskCreatedSubject.unsubscribe();
    }
}
