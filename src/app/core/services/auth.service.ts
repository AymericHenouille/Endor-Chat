import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly auth: Auth,
  ) { }

  public get user$(): Observable<User | undefined> {
    return authState(this.auth).pipe(
      map(credential => credential ? { id: credential.uid, credential } : undefined)
    );
  }

  public get isAuth$(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }

  public signIn(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then();
  }

  public signUp(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password).then();
  }

  public signOut(): Promise<void> {
    return signOut(this.auth);
  }

}
