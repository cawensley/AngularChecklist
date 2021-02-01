import { Component, Input } from '@angular/core';
import {TaskListService} from '../../services/TaskList.service';

@Component({
  selector: 'app-to-do-thing',
  templateUrl: './to-do-thing.component.html',
  styleUrls: ['./to-do-thing.component.scss']
})
export class ToDoThingComponent {
  @Input() TaskInfo: {name: 'String', complete: boolean};

  constructor(private taskListService: TaskListService) { }

  toggleTask() {
    this.taskListService.toggleTaskCompletion(this.TaskInfo.name);
  }
}
