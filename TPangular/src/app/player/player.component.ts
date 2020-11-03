import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Player} from '../interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() data: Player;
  @Output() changeState = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  injure() {
    console.log(this.data.lastName);
    this.data.injured = !this.data.injured;
    this.changeState.emit();
  }
}
