import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterValue = 0;
  get counter() {
    return this.counterValue;
  }
  constructor() {
    console.log('init class')
  }

  increment() {
    this.counterValue++;
  }

  reset() {
    this.counterValue = 0;
  }
}
