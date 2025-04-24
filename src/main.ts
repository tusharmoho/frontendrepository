import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component'; // adjust the path as needed

const routes: Routes = [
  { path: '', component: AppComponent },       // Home
  { path: 'users', component: UserComponent }  // Your user component route
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
