import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Welcome to the App</h1>
    <a routerLink="/">Home</a> |
    <a routerLink="/users">User Page</a>|
    <a routerLink="/login">Login Page</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
