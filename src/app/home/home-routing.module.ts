import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
      {path: '', redirectTo: 'task', pathMatch: 'full'},
      {path: 'task', loadChildren: () => import('../task/task.module').then(m => m.TaskModule)}]
   
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
