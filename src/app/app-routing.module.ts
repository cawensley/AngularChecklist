import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './atomic-design/pages/login-page/login-page.component';
import {TasksPageComponent} from './atomic-design/pages/tasks-page/tasks-page.component';
import {PageNotFoundComponent} from './atomic-design/pages/page-not-found/page-not-found.component';
import {TaskListGuard} from './services/TaskListGuard.service';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'tasks', canActivate: [TaskListGuard], component: TasksPageComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
