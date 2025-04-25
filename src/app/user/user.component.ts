import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface User {
  id?: number;  
  userId?: string; 
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
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = { userName: '', userSurname: '', phoneNumber: '', address: '' };
  selectedUser: User | null = null;
  nextId: number = 1;

  constructor(private http: HttpClient) {}  
  ngOnInit(): void {
    this.viewUser(); 

  }

  addUser() {
    if (!this.newUser.userName || !this.newUser.userSurname || !this.newUser.phoneNumber) return;

    const userToAdd: User = { ...this.newUser }; 

    this.http.post<{ responseCode: number; responseMessage: string; data: User }>('http://localhost:8099/user-service/save-user', userToAdd)
      .subscribe({
        next: (response) => {
          console.log('Success:', response);
          alert(`User saved successfully! ID: ${response.data.userId}, Name: ${response.data.userName}`);

        },
        error: (err) => {
          console.error('Error:', err);
          alert("Failed to save user.");
        }
      });
  }



  viewUser() {
    this.http.get<{ responseCode: number; responseMessage: string; data: { content: User[] } }>(
      'http://localhost:8099/user-service/fetch-users?page=1&size=10&sort=userId,desc'
    ).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.users = response.data.content; 
        alert(`Fetched ${response.data.content.length} users successfully!`);
      },
      error: (err) => {
        console.error('Error:', err);
        alert("Failed to fetch users.");
      }
    });
  }
  
  

  clearSelected() {
    this.selectedUser = null;
  }
}
