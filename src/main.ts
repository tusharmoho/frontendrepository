import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component'; // adjust the path as needed
import { LoginComponent } from './app/login/login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },       // Home
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent }  // Your user component route
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
