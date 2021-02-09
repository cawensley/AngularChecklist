import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskListService} from '../../../services/TaskList.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit, OnDestroy {
  completeTaskList = [] as any;
  isFetching = false;
  TaskSubscription: Subscription;

  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
    this.isFetching = true;
    this.TaskSubscription = this.taskListService.ToDoListChanged.subscribe((newTaskList) => {
      this.completeTaskList = newTaskList;
    });
    this.taskListService.getToDoList();
    this.isFetching = false;
  }

  sortTasksFunction() {
    this.taskListService.SortList();
  }

  onFormSubmit(form: NgForm) {
    this.taskListService.addTaskToList(form.value.name);
    form.reset();
  }

  ngOnDestroy() {
    this.TaskSubscription.unsubscribe();
  }
}
