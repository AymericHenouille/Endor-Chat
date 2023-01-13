import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreStoreModule } from './core-store/core-store.module';
import { FireModule } from './fire/fire.module';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  BrowserModule,
  CoreStoreModule,
  FireModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class CoreModule { }
