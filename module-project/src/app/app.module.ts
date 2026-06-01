import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './features/user/user.component';
import { HeaderModule } from './features/header/header.module';
import { TasksModule } from './features/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent], // no standalone components should be declared here
  imports: [BrowserModule, UserComponent, TasksModule, HeaderModule], // standalone components should be imported
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
