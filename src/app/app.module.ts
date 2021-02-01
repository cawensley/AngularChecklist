import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoThingComponent } from './Atoms/to-do-thing/to-do-thing.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
