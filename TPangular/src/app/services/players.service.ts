import { Injectable } from '@angular/core';
import {Player} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players: Player[] = [{firstName: 'Ramsey', num: 6}, {firstName: 'Ronaldo', num: 7}, {firstName: 'Chiesa', num: 22}, {firstName: 'Bonucci', num: 4}];

  constructor() { }

  getPlayers(){
    return this.players;
  }
}
