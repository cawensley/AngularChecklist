import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoThingComponent } from './Atoms/to-do-thing/to-do-thing.component';
import { TaskListService } from './services/TaskList.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/Auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoThingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [TaskListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
