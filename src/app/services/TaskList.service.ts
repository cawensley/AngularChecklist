import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {AuthService} from './Auth.service';

@Injectable()
export class TaskListService {
  ToDoListChanged = new Subject();
  webURL = 'https://angularchecklist-ee44b-default-rtdb.firebaseio.com/tasks';

  private CompleteToDoList = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  SortList() {
    function nameAscend(a, b) {
      const NameA = a.name.toUpperCase();
      const NameB = b.name.toUpperCase();

      let comparison = 0;
      if (NameA > NameB) {
        comparison = 1;
      } else if (NameA < NameB) {
        comparison = -1;
      }
      return comparison;
    }
    this.CompleteToDoList = this.CompleteToDoList.sort(nameAscend);
    this.ToDoListChanged.next(this.CompleteToDoList.slice());
  }

  getToDoList() {
    this.http.get(`${this.webURL}/${this.authService.getUserID()}.json`)
      .pipe(
        map(responseData => {
          const tasksArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              tasksArray.push({...responseData[key], id: key});
            }
          }
          return tasksArray;
        }
      ))
      .subscribe(tasks => {
        this.CompleteToDoList = tasks;
        this.ToDoListChanged.next(this.CompleteToDoList.slice());
      }
      );
  }

  addTaskToList(newTaskName) {
    this.http.post(`${this.webURL}/${this.authService.getUserID()}.json`,
      {name: newTaskName, complete: false}).subscribe((taskID) => {
        // @ts-ignore
        this.CompleteToDoList.push({name: newTaskName, complete: false, id: taskID.name});
        this.ToDoListChanged.next(this.CompleteToDoList.slice());
      });
  }

  deleteTask(oldTaskName) {
    const TaskInfo = this.CompleteToDoList.filter((task) => (task.name === oldTaskName))[0];
    this.http.delete(`${this.webURL}/${this.authService.getUserID()}/${TaskInfo.id}.json`).subscribe();
    this.CompleteToDoList = this.CompleteToDoList.filter((task) => (task.name !== oldTaskName));
    this.ToDoListChanged.next(this.CompleteToDoList.slice());
  }

  toggleTaskCompletion(TaskName) {
    this.CompleteToDoList.forEach((item) => {
      if (item.name === TaskName) {
        item.complete = !item.complete;
      }
    });
    this.ToDoListChanged.next(this.CompleteToDoList.slice());
    const TaskInfo = this.CompleteToDoList.filter((task) => (task.name === TaskName))[0];
    this.http.put(`${this.webURL}/${this.authService.getUserID()}/${TaskInfo.id}.json`,
      {name: TaskInfo.name, complete: TaskInfo.complete}).subscribe();
  }
}
