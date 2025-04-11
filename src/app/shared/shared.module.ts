import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TextEllipsisPipe } from './pipes/text-ellipsis.pipe';
import { BackgroundColorDirective } from './directives/background-color.directive';



@NgModule({
  declarations: [TextEllipsisPipe,
    BackgroundColorDirective
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    TextEllipsisPipe,
    BackgroundColorDirective
  ]
})
export class SharedModule { }
