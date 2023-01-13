import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent {

  protected form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  protected error!: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  public async submit(): Promise<void> {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      try {
        await this.authService.signIn(email, password);
        await this.router.navigate(['/']);
      } catch (error: any) {
        this.error = error.message;
      }
    }
  }

}
