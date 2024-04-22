import { Component, Input, OnInit } from '@angular/core';
import { CollaboratorsService } from '../../shared/services/collaborators.service';
import { ColaboratorInterface } from '../../shared/interfaces/collaboratorsList.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Collaborator } from '../../shared/models/collaborators.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  @Input() editform: any;
  public colaborador: Collaborator | undefined;

  public id: string = "";
  public nome: string | undefined;
  public telefone: string | undefined;
  public email: string | undefined;
  cadastroForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private colaboradorService: CollaboratorsService) {

    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    if (this.editform.id) {
      this.cadastroForm = this.formBuilder.group({
        nome: [this.editform.nome, [Validators.required]],
        telefone: [this.editform.telefone, [Validators.required]],
        cpf: [this.editform.cpf, [Validators.required]],
        email: [this.editform.email, [Validators.required, Validators.email]],
      });
    }

  }



  salvar() {
    if (this.cadastroForm.valid) {
      this.colaborador = new Collaborator();
      this.colaborador.email = this.cadastroForm.value['email'];
      this.colaborador.telefone = this.cadastroForm.value['telefone'];
      this.colaborador.nome = this.cadastroForm.value['nome'];
      this.colaborador.cpf = this.cadastroForm.value['cpf'];

      if (this.editform && this.editform?.id) {
        this.colaborador.id = this.editform.id;
        this.colaboradorService.updateCollaborator(this.colaborador).subscribe(() => {
          alert('Colaborador atualizado com sucesso!');
        });
      } else {
        this.colaboradorService.addCollaborator(this.colaborador).subscribe(() => {
          alert('Colaborador cadastrado com sucesso!');
        });
      }
    }
  }
}
