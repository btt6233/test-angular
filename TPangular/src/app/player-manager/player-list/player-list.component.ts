import { Component, OnInit } from '@angular/core';
import {Player} from '../../interfaces';
import {HttpClient} from '@angular/common/http';
import {PlayerService} from '../player.service';
import {switchMap} from 'rxjs/operators';

const API = 'http://localhost:3000/players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  private _players: Player[] = [];
  players: Player[] = [];
  selectedPlayer: Player | null = null;
  teams: string[] = ['Real Madrid', 'Juventus', 'Chelsea', 'Arsenal'];

  constructor( private http: HttpClient,
               private playerService: PlayerService) { }

  ngOnInit(): void {
    this.http
      .get(API)
      .pipe(
        switchMap((players: Player[]) => players),
      )
      .subscribe((player: Player) => {
        this.players.push(player);
        this._players.push(player);
      });
    console.log(this.http.get(API).pipe(switchMap((players: Player[]) => players)).subscribe((player: Player) => {
        this.players.push(player);
        this._players.push(player);
      }));
  }

  playerDetail($event: any, id: number) {
    this.playerService
      .getById(id)
      .subscribe((player: Player) => this.selectedPlayer = player);
  }
}
