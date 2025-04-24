import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common'; // ✅ Add NgIf, NgFor
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  userName: string;
  userSurname: string;
  phoneNumber: string;
  address: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  users: User[] = [];
  newUser: User = { id: 0, userName: '', userSurname: '', phoneNumber: '', address: '' };
  selectedUser: User | null = null;
  nextId: number = 1;

  addUser() {
    // Validate required fields
    if (!this.newUser.userName || !this.newUser.userSurname || !this.newUser.phoneNumber) return;

    const userToAdd: User = {
      id: this.nextId++,
      userName: this.newUser.userName,
      userSurname: this.newUser.userSurname,
      phoneNumber: this.newUser.phoneNumber,
      address: this.newUser.address,
    };

    // Add new user to the list
    this.users = [...this.users, userToAdd];  // Create a new reference to the array, which will trigger change detection

    // Clear the input form after adding the user
    this.newUser = { id: 0, userName: '', userSurname: '', phoneNumber: '', address: '' };
  }

  viewUser(user: User) {
    this.selectedUser = user;
  }

  clearSelected() {
    this.selectedUser = null;
  }
}
