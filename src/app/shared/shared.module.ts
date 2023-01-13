import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  CommonModule
];

const COMPONENT: Type<unknown>[] = [
  ModalComponent
];

@NgModule({
  declarations: [COMPONENT],
  imports: [MODULES],
  exports: [MODULES, COMPONENT],
  providers: [

  ]
})
export class SharedModule { }
