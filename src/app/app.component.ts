import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  CompleteToDoList = [
    {name: 'Get KFC for dinner', complete: false},
    {name: 'Buy GME', complete: false},
    {name: 'Get Valentines Day Card', complete: false},
    {name: 'Walk the Dog', complete: false},
  ];

  onFormSubmit(form: NgForm): void {
    const newTaskName = form.value.name;
    this.CompleteToDoList.push({name: newTaskName, complete: false});
    form.reset();
  }
}
