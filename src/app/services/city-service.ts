import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel, CityPageResponse } from '../model/cityModel';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(private http: HttpClient){}

  private url: string = 'http://localhost:8080/api/city'

  getById(id: number): Observable<CityModel>{
    return this.http.get<CityModel>(`${this.url}/${id}`)
  }

  getAll(page: number, size: number): Observable<CityPageResponse>{
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
    return this.http.get<CityPageResponse>(this.url, {params})
  }
}
