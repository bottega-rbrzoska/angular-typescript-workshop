import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CounterService } from './core/counter.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'tsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ts-angular';
  counter: any;

  constructor(private router: Router, private counterService: CounterService) {
    console.log('init app component');
    this.counterService.counter$.subscribe( c => this.counter = c);
    router.events.pipe(
      filter(ev => ev instanceof NavigationEnd )
    ).subscribe(() => {
      this.counterService.increment();
    });
  }
}
