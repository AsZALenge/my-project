import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-home-register-user',
  templateUrl: './home-register-user.component.html',
  styleUrls: ['./home-register-user.component.css']
})
export class HomeRegisterUserComponent implements OnInit {

  registerFormUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService
  ) { }

  ngOnInit(): void {
    this.registerFormUser = this.fb.group({
      user_name: ['', [Validators.required]],
      user_password: ['', [Validators.required, Validators.minLength(8)]],
      user_citizen: ['', [Validators.required, Validators.minLength(13)]],
      user_email: ['', [Validators.required]],
      user_gender: ['', [Validators.required]],
      user_tel: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.registerFormUser.invalid) {
      return false;

    } else { // case success
      console.log(this.registerFormUser.value);

      // register
      this.shaerdService.register(this.registerFormUser.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  // reset
  resetForm() {
    this.registerFormUser.reset();
  }

  get form() { return this.registerFormUser.controls; }

}
