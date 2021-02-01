import {Subject} from 'rxjs';

export class TaskListService {
  ToDoListChanged = new Subject();

  private CompleteToDoList = [
    {name: 'Get KFC for dinner', complete: false},
    {name: 'Buy GME', complete: false},
    {name: 'Get Valentines Day Card', complete: false},
    {name: 'Walk the Dog', complete: false},
  ];

  getToDoList() {
    return this.CompleteToDoList.slice();
  }

  addTaskToList(newTaskName) {
    this.CompleteToDoList.push({name: newTaskName, complete: false});
    this.ToDoListChanged.next(this.CompleteToDoList.slice());
  }

  toggleTaskCompletion(TaskName) {
    this.CompleteToDoList.forEach((item) => {
      if (item.name === TaskName) {
        item.complete = !item.complete;
      }
    });
    this.ToDoListChanged.next(this.CompleteToDoList.slice());
  }
}
