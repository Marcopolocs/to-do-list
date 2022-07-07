import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem } from 'src/app/shared/to-do-list.model';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css'],
})
export class EditListItemComponent implements OnInit {
  completedItem: boolean = false;
  constructor(private listItemService: ToDoListService) {}

  ngOnInit(): void {}

  // onCompleted(itemId: number, listItem: ListItem) {
  //   this.completedItem = true;
  //   this.listItemService.completedItem(itemId, listItem);
  // }

  // onDeleteItem(itemId: number) {
  //   this.id = itemId;
  //   this.listItemService.deleteItem(this.id);
  // }
}
