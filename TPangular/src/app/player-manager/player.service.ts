import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'http://localhost:3000/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getById(id: number): any {
    return this.http.get(API + '/' + id);
  }
}
