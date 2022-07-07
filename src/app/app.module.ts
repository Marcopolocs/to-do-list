import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewListItemComponent } from './to-do-list/new-list-item/new-list-item.component';
import { EditListItemComponent } from './to-do-list/edit-list-item/edit-list-item.component';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NewListItemComponent,
    EditListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ToDoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
