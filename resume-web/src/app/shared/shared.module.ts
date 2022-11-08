import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ObserveElementDirective } from './directives/observe-element.directive';
import { GetValueByKeyFromListPipe } from './pipes/get-value-by-key-from-list.pipe';

@NgModule({
  imports: [
  ],
  providers: [
  ],
  declarations: [
    GetValueByKeyFromListPipe,
    ObserveElementDirective,
    ClickOutsideDirective
  ],
  exports: [
    GetValueByKeyFromListPipe,
    ObserveElementDirective,
    ClickOutsideDirective
  ]
})
export class SharedModule {}