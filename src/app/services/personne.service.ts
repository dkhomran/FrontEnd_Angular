import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  constructor(private http: HttpClient ) { }
  private url = 'http://127.0.0.1:8000/';

  storePersonne(personne: any) {
    return this.http.post(this.url + "personne/store",personne);
  }
  listPersonne() {
    return this.http.get(this.url + 'personne/list');
  }
  deletePersonne(id: any) {
    return this.http.delete(this.url + 'personne/delete/'+id);
  }

  getPersonneToUpdate(id: any) {
    return this.http.get(this.url + "personne/edit/" + id);
  }

  updatePersonne(id: any, personne: any) {
    return this.http.post(this.url + 'personne/update/'+ id, personne);
  }

}
