import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import {TaskListService} from './services/TaskList.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  completeTaskList;
  TaskSubscription: Subscription;

  constructor(private taskListService: TaskListService) {}

  ngOnInit() {
    this.completeTaskList = this.taskListService.getToDoList();
    this.TaskSubscription = this.taskListService.ToDoListChanged.subscribe((newTaskList) => {
      this.completeTaskList = newTaskList;
    });
  }

  onFormSubmit(form: NgForm) {
    this.taskListService.addTaskToList(form.value.name);
    form.reset();
  }

  ngOnDestroy() {
    this.TaskSubscription.unsubscribe();
  }
}
