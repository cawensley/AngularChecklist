import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoThingComponent } from './atomic-design/Atoms/to-do-thing/to-do-thing.component';
import { TaskListService } from './services/TaskList.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/Auth.service';
import { LoginPageComponent } from './atomic-design/pages/login-page/login-page.component';
import { TasksPageComponent } from './atomic-design/pages/tasks-page/tasks-page.component';
import { HeaderComponent } from './atomic-design/organisms/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoThingComponent,
    LoginPageComponent,
    TasksPageComponent,
    HeaderComponent
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
