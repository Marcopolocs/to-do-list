import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDoListService } from '../to-do-list.service';
import { ListItem } from 'src/app/shared/to-do-list.model';

@Component({
  selector: 'app-new-list-item',
  templateUrl: './new-list-item.component.html',
  styleUrls: ['./new-list-item.component.css'],
})
export class NewListItemComponent implements OnInit {
  newListForm!: FormGroup;
  id!: number;

  constructor(private listService: ToDoListService) {}

  ngOnInit(): void {
    this.newListForm = new FormGroup({
      toDoName: new FormControl('', [Validators.required]),
      toDoDescription: new FormControl('', [Validators.required]),
    });

    this.newListForm.get('toDoName')?.valueChanges.subscribe((value) => {});
  }

  // Kibaszott felkiáltójel kellett ide is :s
  onAddItem() {
    const toDoName = this.newListForm.get('toDoName')!.value;
    const toDoDescription = this.newListForm.get('toDoDescription')!.value;
    const listItem = new ListItem(this.id, toDoName, toDoDescription);
    this.listService.addListItem(listItem);
    this.newListForm.reset();
  }
}
