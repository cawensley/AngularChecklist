import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoThingComponent } from './Atoms/to-do-thing/to-do-thing.component';
import { TaskListService } from './services/TaskList.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
