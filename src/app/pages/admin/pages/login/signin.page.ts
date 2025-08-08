import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../../app.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class SigninPage {
  form: FormGroup;

  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signin() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;
    this.appService.signin(this.form.value).subscribe({
      next: (res) => {
        document.cookie = `AUTH_KEY=${res.AUTH_KEY};path=/`;
        this.router.navigate(['/admin/cars']);
      },
      error: () => {
        this.error = 'Неверный логин или пароль';
        this.loading = false;
      },
    });
  }
}
