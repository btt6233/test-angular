import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './interfaces';

const API: string = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getById(id: number): any {

    // this.http
    //   .get(API + '/' + id)
    //   .subscribe((todo: Todo) => {
    //     return todo;
    //   })

    return this.http.get(API + '/' + id);

  }
}
