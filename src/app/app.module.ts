import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    FormsModule,
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
