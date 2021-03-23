import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsa-my-test', // 'tsa-my-test' => <tsa-my-test></tsa-my-test>
  // '[tsaMyTest] => <div tsaMyTest> ...
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
