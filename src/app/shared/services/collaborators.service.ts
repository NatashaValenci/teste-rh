import { Injectable } from '@angular/core';
import { Collaborator, Collaborators } from '../models/collaborators.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  private apiUrl = 'http://localhost:3000/colaboradores';

  constructor(private http: HttpClient) { }
  getCollaborators(): Observable<any> {
    return this.http.get<Collaborators>(this.apiUrl);
  }

  addCollaborator(collaborator: any): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.apiUrl, collaborator);
  }

  updateCollaborator(collaborator: any): Observable<Collaborator> {
    const url = `${this.apiUrl}/${collaborator.id}`;
    return this.http.put<Collaborator>(url, collaborator);
  }

  deleteCollaborator(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
