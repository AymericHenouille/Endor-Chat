import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore())
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class FireModule { }
