import { Component, OnInit} from '@angular/core';
import {Player} from '../interfaces';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  numInjuredPlayers: number = 0;

  constructor() { }

  ngOnInit(): void {
    let p1: Player = {firstName: 'Cristiano', lastName: 'Ronaldo', num: 7, injured: false};
    let p2: Player = {firstName: 'Lionel', lastName: 'Messi', injured: true};
    let p3: Player = {firstName: 'Kilian', lastName: 'Mbappe', num: 9, injured: false};

    this.players.push(p1);
    this.players.push(p2);
    this.players.push(p3);

    this.onChange();
  }

  onChange() {
    this.numInjuredPlayers = this.players.filter(p => p.injured).length;
  }
}
