import { Component } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = '';
  senha: string = '';
  name: string = '';

  confirmacaoSenha: string = '';

  constructor(private router: Router, private userService: UsersService) {}

  onSubmit() {
    if (this.senha !== this.confirmacaoSenha) {
     alert('A senha e a confirmação de senha não correspondem.');
      return;
    }

    this.userService.registrar({'email': this.email,'password': this.senha, 'name': this.name}).subscribe(
      (response) => {
        alert('Usuário registrado com sucesso');
        this.router.navigate(['/']); 

      },
      (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }

  voltar(){
    this.router.navigate(['/']); 

  }
}
