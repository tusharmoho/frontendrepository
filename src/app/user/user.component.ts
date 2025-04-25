import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface User {
  id?: number;  // Made `id` optional since the backend generates it
  userId?: string; // Adding for backend response handling
  userName: string;
  userSurname: string;
  phoneNumber: string;
  address: string;
}

@Component({
  selector: 'app-user',
  standalone: true, 
  templateUrl: './user.component.html',
  imports: [FormsModule, HttpClientModule, CommonModule], 
})
export class UserComponent {
  users: User[] = [];
  newUser: User = { userName: '', userSurname: '', phoneNumber: '', address: '' };
  selectedUser: User | null = null;
  nextId: number = 1;

  constructor(private http: HttpClient) {}  // Injecting HttpClient

  addUser() {
    if (!this.newUser.userName || !this.newUser.userSurname || !this.newUser.phoneNumber) return;

    const userToAdd: User = { ...this.newUser }; // Creating object without modifying newUser

    this.http.post<{ responseCode: number; responseMessage: string; data: User }>('http://localhost:8099/user-service/save-user', userToAdd)
      .subscribe({
        next: (response) => {
          console.log('Success:', response);
          alert(`User saved successfully! ID: ${response.data.userId}, Name: ${response.data.userName}`);

          this.users = [...this.users, response.data]; // Adding saved user from response
          this.newUser = { userName: '', userSurname: '', phoneNumber: '', address: '' }; // Reset after success
        },
        error: (err) => {
          console.error('Error:', err);
          alert("Failed to save user.");
        }
      });
  }

  viewUser(user: User) {
    this.selectedUser = user;
  }

  clearSelected() {
    this.selectedUser = null;
  }
}
