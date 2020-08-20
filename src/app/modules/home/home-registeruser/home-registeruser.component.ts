import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-registeruser',
  templateUrl: './home-registeruser.component.html',
  styleUrls: ['./home-registeruser.component.css']
})
export class HomeRegisteruserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      citizen: ['', [Validators.required, Validators.minLength(13)]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      role: ['2', [Validators.required]]
    });
  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.registerForm.invalid) {
      return false;

    } else { // case success
      console.log(this.registerForm.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.registerForm.value);
      this.router.navigate(['/home/login']);
      // register
      this.shaerdService.register(this.registerForm.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  // reset
  resetForm() {
    this.registerForm.reset();
  }

  get form() { return this.registerForm.controls; }

}
