import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CollaboratorsService } from   '../../shared/services/collaborators.service';
import { runInThisContext } from 'vm';
import { Collaborator } from '../../shared/models/collaborators.model';
import { Collaborators } from '../../shared/models/collaborators.model';
import { MatTableModule } from '@angular/material/table';
import { ColaboratorInterface } from '../../shared/interfaces/collaboratorsList.interface'
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, NavbarComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})



export class ListComponent implements OnInit {
  @Output() dataEdit = new EventEmitter<string>();

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'email','delet', 'edit'];
  colaboradores: ColaboratorInterface[] = [];
  constructor(private collaboratorService : CollaboratorsService) {
  }
  
  ngOnInit(): void {
    this.loadCollaborators();
  }

  loadCollaborators() {
    this.collaboratorService.getCollaborators().subscribe(collaborators => {
      this.colaboradores = collaborators;
    });
  }

  editCollaborator(collaborator : any) {
    this.dataEdit.emit(collaborator);
  }

  deleteCollaborator(id: string) {
    console.log(id);
    this.collaboratorService.deleteCollaborator(id).subscribe(() =>{
      this.loadCollaborators();
    })
  }



}
