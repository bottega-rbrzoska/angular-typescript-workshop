import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterValue = 0;
  get counter() {
    return this.counterValue;
  }
  constructor() { }

  increment() {
    this.counterValue++;
  }

  reset() {
    this.counterValue = 0;
  }
}
