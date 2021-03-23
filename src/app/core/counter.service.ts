import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubj = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.counterSubj.asObservable();

  get counter() {
    return this.counterSubj.value;
  }
  constructor() {
    console.log('init class')
  }

  increment(): void {
    this.counterSubj.next(this.counterSubj.value + 1)
  }

  reset(): void {
    this.counterSubj.next(0)
  }
}
