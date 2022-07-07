import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { ListItem } from '../shared/to-do-list.model';

export class ToDoListService {
  userAddedItem = new Subject<ListItem[]>();
  defaultListItems: ListItem[] = [
    new ListItem(1, 'Jó lett pali?', 'Fckn purple'),
  ];
  // id!: number;
  itemEmitter = new EventEmitter<ListItem>();

  constructor() {}

  addListItem(item: ListItem) {
    this.defaultListItems.push(item);
    // this.addIdToItems();
    this.userAddedItem.next(this.defaultListItems.slice());
  }

  getListItems() {
    return this.defaultListItems.slice();
  }

  // addIdToItems() {
  //   this.defaultListItems.forEach((item, i) => {
  //     item.id = i + 1;
  //   });
  // }

  completedItem(id: number, listItem: ListItem) {
    const item = listItem;
    this.defaultListItems.splice(id, 1);
    this.defaultListItems.push(item);
    this.userAddedItem.next(this.defaultListItems.slice());
  }

  deleteItem(id: number) {
    this.defaultListItems.splice(id - 1, 1);
    this.userAddedItem.next(this.defaultListItems.slice());
  }
}
