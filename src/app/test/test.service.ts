import { Injectable } from '@angular/core';
import { TestModule } from './test.module';

@Injectable()
export class TestService {

  testVar = 'hello test';
  constructor() {
    console.log('init test service')
  }
}
