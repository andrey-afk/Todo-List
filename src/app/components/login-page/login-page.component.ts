import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/Auth-service";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public form!: FormGroup;
  public error = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  submit() {
    if(this.form.valid) {
      this.authService.login(this.form.value).subscribe((email: any) => {
        this.localStorageService.updateStorage(email);
        this.router.navigate(['home']);
      }, error => {
        this.error = error;
      })
    }
  }
}
