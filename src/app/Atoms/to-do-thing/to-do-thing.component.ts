import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-thing',
  templateUrl: './to-do-thing.component.html',
  styleUrls: ['./to-do-thing.component.scss']
})
export class ToDoThingComponent implements OnInit {
  @Input() TaskInfo: {name: 'String', complete: boolean};
  TaskCompleted;
  constructor() { }

  ngOnInit(): void {
    this.TaskCompleted = this.TaskInfo.complete;
  }

  toggleTask(): void {
    this.TaskCompleted = !this.TaskCompleted;
  }
}
