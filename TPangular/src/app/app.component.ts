import { Component } from '@angular/core';
import {FruitService} from './services/fruit.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introAngular';
  fruits: string[];

  constructor(private fruitService: FruitService) {
    this.fruits = this.fruitService.getFruits();
  }
}

