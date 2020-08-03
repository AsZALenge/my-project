import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-updateprofile',
  templateUrl: './user-updateprofile.component.html',
  styleUrls: ['./user-updateprofile.component.css']
})
export class UserUpdateprofileComponent implements OnInit {

  updateFormUser: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.updateFormUser = this.fb.group({
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
    if (this.updateFormUser.invalid) {
      return false;

    } else { // case success
      console.log(this.updateFormUser.value);

      // register
      this.userService.updateuser(this.updateFormUser.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  // reset
  resetForm() {
    this.updateFormUser.reset();
  }

  get form() { return this.updateFormUser.controls; }


}
