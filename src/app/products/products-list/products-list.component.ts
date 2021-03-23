import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/core/counter.service';
import { TestService } from 'src/app/test/test.service';

@Component({
  selector: 'tsa-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
