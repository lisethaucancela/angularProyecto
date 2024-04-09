import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from './auto-interface';

@Injectable({
  providedIn: 'root'
})

export class AutoService {

  url = 'http://epico.gob.ec/vehiculo/public/api';
  constructor(private http: HttpClient) { }


  getAutos(): Observable<Auto[] | any> {
    return this.http.get(this.url + '/vehiculos/');
  }

  getAutoById(id: string) {
    return this.http.get<Respuesta>(this.url + '/vehiculo/' + id);
  }

  deleteAuto(id: string) {
    return this.http.delete(this.url + '/vehiculo/' + id);
  }

  updateAuto(id: string, auto: any) {
    return this.http.put<Respuesta>(this.url + '/vehiculo/' + id, auto);
  }

  addAuto(auto: Auto) {
    let httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Respuesta>(this.url + '/vehiculo/', auto, httOptions);
  }
}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Auto> | Auto | any;
}