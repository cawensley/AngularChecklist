import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListService } from './services/TaskList.service';
import { AuthService } from './services/Auth.service';
import { ToDoThingComponent } from './atomic-design/Atoms/to-do-thing/to-do-thing.component';
import { LoginPageComponent } from './atomic-design/pages/login-page/login-page.component';
import { TasksPageComponent } from './atomic-design/pages/tasks-page/tasks-page.component';
import { HeaderComponent } from './atomic-design/organisms/header/header.component';
import { PageNotFoundComponent } from './atomic-design/pages/page-not-found/page-not-found.component';
import {TaskListGuard} from './services/TaskListGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoThingComponent,
    LoginPageComponent,
    TasksPageComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [TaskListService, AuthService, TaskListGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
