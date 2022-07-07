import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListItem } from '../shared/to-do-list.model';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  completedItem: boolean = false;
  listItems!: ListItem[];
  subscribeToSubject!: Subscription;
  id!: number;
  constructor(private listItemService: ToDoListService) {}

  ngOnInit(): void {
    this.listItems = this.listItemService.getListItems();
    this.subscribeToSubject = this.listItemService.userAddedItem.subscribe(
      (data) => {
        this.listItems = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscribeToSubject.unsubscribe();
  }

  onCompleted(itemId: number, listItem: ListItem) {
    this.completedItem = true;
    this.listItemService.completedItem(itemId, listItem);
  }

  onDeleteItem(itemId: number) {
    this.id = itemId;
    this.listItemService.deleteItem(this.id);
  }
}
