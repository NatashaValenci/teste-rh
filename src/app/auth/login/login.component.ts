import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public user!: User;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.user = new User();
      this.user.email = this.loginForm.value['email'];
      this.user.password = this.loginForm.value['password'];
      this.isLoggedIn();
    }
  }

  public isLoggedIn() {
    this.userService.loggin(this.user)
      .subscribe(response => {
        console.log(response);
        this.user = response.find((item: User) => {
          return item.password === this.user?.password && item.email === this.user?.email
        });

        if (this.user) {
          console.log('name: ', this.user.name);
          this.userService.login(this.user.name || '');
          this.router.navigate(['/home']);
        }

      }, err => {
        console.log(err);
      }

      )
  }

  public register() {
    this.router.navigate(['/register']);

  }

  public recovery() {
    this.router.navigate(['/recovery']);

  }
}
