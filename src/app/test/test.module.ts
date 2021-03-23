import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestComponent } from './my-test/my-test.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [MyTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [TestService]
})
export class TestModule { }

export class HelperModuleCostam {}
