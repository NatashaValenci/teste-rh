import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [NavbarComponent, ListComponent, CommonModule, FormComponent],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.scss'
})
export class CollaboratorsComponent {

  public visualize : boolean = true;
  public colaborador : any | undefined;
  constructor(){}
  
  public pageForm() : void {
    this.colaborador = null;
    this.visualize = false;
  }
  public visualizeForm():void{
    this.colaborador = null;
    this.visualize = true;
  }

  public dataEdit(data : any){
    this.colaborador = data;
    this.visualize = false;
  }
}
