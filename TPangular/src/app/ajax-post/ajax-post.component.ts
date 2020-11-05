import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajax-post',
  templateUrl: './ajax-post.component.html',
  styleUrls: ['./ajax-post.component.css']
})
export class AjaxPostComponent implements OnInit {
  message = '';
  player = {
    lastname: '',
    firstname: '',
    teamId: 1,
    position: 'gardien',
    age: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  updatePlayerLastname(event: any) {
    this.player.lastname = event.target.value;
  }

  postPlayer() {
    // let player = {
    //   lastname: "Tota",
    //   firstname: "Titi",
    //   teamId: 89,
    //   position: "gardien",
    //   age: 66
    // };
    const url = 'http://localhost:3000/players';

    this.http.post(url, this.player)
      .subscribe((res: any) => {
        if (res.id) {
          this.message = `Le joueur ${res.lastname} a été ajouté`;
        }
      });
  }
}
