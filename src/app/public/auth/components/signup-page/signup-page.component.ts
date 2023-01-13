import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { fieldMatchValidator, passwordValidator } from '../../validators';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  protected form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, passwordValidator]),
    confirmPassword: new FormControl('', [Validators.required, passwordValidator])
  }, {
    validators: [fieldMatchValidator('password', 'confirmPassword')]
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
        await this.authService.signUp(email, password);
        await this.router.navigate(['/']);
      } catch (error: any) {
        this.error = error.message;
      }
    }
  }

  protected get passwordControl(): FormControl | null {
    return this.form.get('password') as FormControl;
  }

  protected get confirmPasswordControl(): FormControl | null {
    return this.form.get('confirmPassword') as FormControl;
  }

  protected get passwordValidator(): string | undefined {
    const control: AbstractControl | null = this.passwordControl;
    return control && control.errors && control.errors['passwordLenght'];
  }

  protected get confirmPasswordValidator(): string | undefined {
    const control: AbstractControl | null = this.confirmPasswordControl;
    return control && control.errors && control.errors['passwordLenght'];
  }

  protected get fieldMatchValidator(): string | undefined {
    const control: AbstractControl | null = this.form;
    return control && control.errors && control.errors['fieldMatch'];
  }
}
