import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestComponent } from './my-test/my-test.component';

@NgModule({
  declarations: [MyTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }

export class HelperModuleCostam {}
