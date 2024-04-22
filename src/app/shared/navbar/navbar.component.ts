import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UsersService,  private router: Router) { }
  public username: string = "";
  public loggedIn: boolean = false;

  ngOnInit(): void {
    console.log('só pra eu ver uma coisa aqui ', this.userService.username);
    this.username = localStorage.getItem('username') || "";
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']); 
  }
}
