import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import {TaskListService} from './services/TaskList.service';
import {Subscription} from 'rxjs';
import {AuthService} from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  completeTaskList = [] as any;
  userInfo = null;
  isFetching = false;
  TaskSubscription: Subscription;
  UserSubscription: Subscription;

  constructor(private taskListService: TaskListService, private authService: AuthService) {}

  ngOnInit() {
    this.isFetching = true;
    this.TaskSubscription = this.taskListService.ToDoListChanged.subscribe((newTaskList) => {
      this.completeTaskList = newTaskList;
    });
    this.UserSubscription = this.authService.UserInfoChanged.subscribe((userData) => {
      this.userInfo = userData;
      this.taskListService.getToDoList();
    });
    this.isFetching = false;
  }

  login() {this.authService.login(); }

  logout() {this.authService.logout(); }

  onFormSubmit(form: NgForm) {
    this.taskListService.addTaskToList(form.value.name);
    form.reset();
  }

  ngOnDestroy() {
    this.TaskSubscription.unsubscribe();
    this.UserSubscription.unsubscribe();
  }
}
