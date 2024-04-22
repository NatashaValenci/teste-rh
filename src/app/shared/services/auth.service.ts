import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model'
import { UsersService} from './users.service'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private userService: UsersService) { }
  public user!: User;
  loggedIn = false;

  username: string | undefined;

  login(username: string) {
    this.username = username;
  }

  logout() {
    this.loggedIn = false;
    this.username = undefined;
  }

  public isLoggedIn(userData : any): User{
    this.userService.loggin(userData)
    .subscribe(response  =>{
      console.log(response);
     return this.user = response.find((item: User) => {
        return item.password === userData?.password && item.email === userData?.email
      });
    
      
    }, err => {
      console.log(err);
    }

    )

    console.log(this.user);

    return this.user;
  }

  
  // addCollaborator() {
  //   const collaboratorData = { name: this.name, email: this.email, role: this.role };
  //   this.collaboratorService.addCollaborator(collaboratorData)
  //     .subscribe(response => {
  //       console.log('Collaborator added successfully:', response);
  //       // Aqui você pode fazer algo após o sucesso, como limpar o formulário ou mostrar uma mensagem de sucesso
  //     }, error => {
  //       console.error('Error adding collaborator:', error);
  //       // Aqui você pode tratar erros, como exibir uma mensagem de erro para o usuário
  //     });
  // }
}
