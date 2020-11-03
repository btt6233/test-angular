import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../interfaces';

@Component({
  selector: 'app-flocking',
  templateUrl: './flocking.component.html',
  styleUrls: ['./flocking.component.css']
})
export class FlockingComponent implements OnInit {
  state: boolean;
  players: Player[];

  constructor(private playersService: PlayersService) {
    this.players = this.playersService.getPlayers();
  }

  ngOnInit(): void {
  }

  showPlayers(event: any) {
    let value = event.target.value;
    console.log(event.target.value);
    if (value === 'flock'){
      this.state = true;
    } else {
      this.state = false;
    }
  }

}
