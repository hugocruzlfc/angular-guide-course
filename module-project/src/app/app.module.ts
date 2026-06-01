import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { UserComponent } from './features/user/user.component';
import { TasksComponent } from './features/tasks/tasks.component';

@NgModule({
  declarations: [AppComponent], // no standalone components should be declared here
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // standalone components should be imported
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
