import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalService {
  private _history: number[] = [];
  get history(): number[]{
    return this._history
  }

  add(numberOne: number, numberTwo: number){
    this._history.push(numberOne + numberTwo)
    console.log(this.history)
    return numberOne + numberTwo;
  }
  clearHistory(){
    this._history = []
  }
}
