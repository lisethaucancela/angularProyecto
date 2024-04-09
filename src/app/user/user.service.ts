import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://epico.gob.ec/vehiculo/public/api';
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[] | any> {
    return this.http.get(this.url + '/clientes/');
  }

  getUserById(id: string) {
    return this.http.get(this.url + '/cliente/' + id);
  }

  deleteUser(id: string) {
    return this.http.delete<Respuesta>(this.url + '/cliente/' + id);
  }

  updateUser(id: string, user: any) {
    return this.http.put<Respuesta>(this.url + '/cliente/' + id, user);
  }

  addUser(user: any) {
    return this.http.post<Respuesta>(this.url + '/cliente/', user);
  }

}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<User> | User | any;
}
