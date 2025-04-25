import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Logindata {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ Fixed styleUrls
})
export class LoginComponent implements OnInit {

  logind: Logindata = { username: '', password: '' };

  ngOnInit(): void {
    console.log("Login Component Initialized");
  }

  takeLoginDetails() {
    const userToAdd: Logindata = { ...this.logind }; 
    console.log('Login details:', userToAdd);
    
    alert(`Login done! Username: ${userToAdd.username}`);
  }
}
