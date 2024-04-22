import { Component } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule ],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.scss'
})
export class PasswordRecoveryComponent {
  email: string = '';

  constructor( private userService: UsersService) {}

  recuperarSenha() {
    this.userService.recuperarSenha(this.email).subscribe(
      (response) => {
        console.log('sucesso:', response);
      },
      (error) => {
        console.error('Erro ao enviar e-mail de recuperação:', error);
      }
    );
  }
}
