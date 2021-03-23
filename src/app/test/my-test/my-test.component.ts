import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { TestService } from '../test.service';

@Component({
  selector: 'tsa-my-test', // 'tsa-my-test' => <tsa-my-test></tsa-my-test>
  // '[tsaMyTest] => <div tsaMyTest> ...
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  user$: Observable<User[]>;
  constructor(private test: TestService) {
    this.user$ = test.fetchUsers();
  }

  ngOnInit(): void {
  }


}
