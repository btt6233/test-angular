import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, take, filter } from 'rxjs/operators';
import { Todo } from '../interfaces';
import { TodoService } from '../todo.service';

const API = 'https://jsonplaceholder.typicode.com/todos';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  private _todos: Todo[] = [];
  public todos: Todo[] = []; // template binding
  selectedTodo: Todo | null = null;

  constructor(
    private http: HttpClient,
    private todoService: TodoService) { }

  ngOnInit(): void {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    this.http
      .get(API)
      .pipe(
        // map(v => [{title: "blabla"}])
        // map(this.uncompletedTodos)
        switchMap((todos: Todo[]) => todos),
        // take(5)
        // filter((v: any) => v.userId == 5),
        // filter((v: any) => v.title.indexOf("et") !== -1)
      )
      .subscribe((todo: Todo) => {
        this.todos.push(todo);
        this._todos.push(todo);
      });

  }

  completedTodos(todos) {
    return todos.filter(todo => todo.completed);
  }

  uncompletedTodos(todos) {
    return todos.filter(todo => !todo.completed);
  }

  onKeyUp(event: any) {
    // console.log(event.key);
    const { value } = event.target;
    // syntaxe équivalente à: let value = event.target.value

    if (value.length > 2) {

      const search = this._todos.filter((todo: Todo) => {
        return todo.title.indexOf(value) !== -1;
      });

      console.log(search);
      this.todos = search;
    } else {
      this.todos = [...this._todos]; // copie par valeur
    }
  }

  onKeyUpBis(event: any) {
    const { value } = event.target;

    if (value.length > 2) {

      this.http
        .get(API)
        .subscribe((todos: Todo[]) => {

          this.todos = todos.filter((todo: Todo) => {
            return todo.title.indexOf(value) !== -1;
          });

        });

    } else {
      // pas de filtrage si longueur de chaîne <= 2
      this.http
        .get(API)
        .subscribe((todos: Todo[]) => this.todos = todos);
    }
  }

  todoDetail(event: any, todoId: number) {
    // let todo = this.todoService.getById(100);
    // console.log(todo); // undefined
    this.todoService
      .getById(todoId)
      .subscribe((todo: Todo) => this.selectedTodo = todo);
  }

}
