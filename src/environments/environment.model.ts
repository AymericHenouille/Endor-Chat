import { FirebaseOptions } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from './firebase.item';

export type Environment = {
  production: boolean;
  firebase: FirebaseOptions
}

export function buildEnv(environment: Partial<Environment> = {}): Environment {
  return {
    production: false,
    firebase: FIREBASE_OPTIONS,
    ...environment
  };
}
