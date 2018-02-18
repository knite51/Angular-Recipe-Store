import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { StyleDirective } from './background-directives';

@NgModule({
  declarations: [
    DropdownDirective,
    StyleDirective
  ],
  exports: [
    DropdownDirective,
    StyleDirective
  ]
})

export class SharedModule { }
