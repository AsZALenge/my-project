import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-home-registerdorm',
  templateUrl: './home-registerdorm.component.html',
  styleUrls: ['./home-registerdorm.component.css']
})
export class HomeRegisterdormComponent implements OnInit {
    registerFormDorm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService
  ) { }

  ngOnInit(): void {
    this.registerFormDorm = this.fb.group({
      dorm_owner: ['', [Validators.required]],
      dorm_password: ['', [Validators.required, Validators.minLength(8)]],
      dorm_name: ['', [Validators.required]],
      dorm_citizen: ['', [Validators.required, Validators.minLength(13)]],
      dorm_tel: ['', [Validators.required, Validators.minLength(10)]],
      dorm_address: ['', [Validators.required]],
      dorm_numbank: ['', [Validators.required, Validators.minLength(10)]],
      dorm_namebank: ['', [Validators.required]],
      dorm_img: ['', [Validators.required]],
    });
  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.registerFormDorm.invalid) {
      return false;

    } else { // case success
      console.log(this.registerFormDorm.value);
      // register
      this.shaerdService.registerdorm(this.registerFormDorm.value).subscribe(
        (error) => console.log(error),
      );
    }
  }

  // reset
  resetForm() {
    this.registerFormDorm.reset();
  }

  get form() { return this.registerFormDorm.controls; }

}
