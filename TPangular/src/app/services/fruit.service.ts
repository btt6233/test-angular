import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruits: string[] = ['cerise', 'kiwi', 'pomme'];

  constructor() { }

  getFruits(){
    return this.fruits;
  }
}
