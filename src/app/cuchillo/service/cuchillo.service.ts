import { Cuchillo } from './../interface/cuchillo.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CuchilloService {
  
  urlBase: string = 'http://localhost:3000/cuchillos';   

  constructor(private http: HttpClient) { }

  //metodos GET, GETBYID, POST, PUT, DELETE

  getCuchillo(): Observable<Cuchillo[]>{
    return this.http.get<Cuchillo[]>(this.urlBase);
  }

  getCuchilloById(id: number|null): Observable<Cuchillo>{
    return this.http.get<Cuchillo>(`${this.urlBase}/${id}`);
  }

  postCuchillo(cuchillo: Cuchillo): Observable<Cuchillo>{
    return this.http.post<Cuchillo>(this.urlBase, cuchillo);
  }

  putCuchillo(id: number|null, cuchillo:Cuchillo): Observable<Cuchillo>{
    return this.http.put<Cuchillo>(`${this.urlBase}/${id}`, cuchillo);
  }

  deleteCuchillo(id: number|undefined): Observable<Cuchillo>{
    return this.http.delete<Cuchillo>(`${this.urlBase}/${id}`);
  }
}
  

