import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-uploadpayment',
  templateUrl: './user-uploadpayment.component.html',
  styleUrls: ['./user-uploadpayment.component.css']
})
export class UserUploadpaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shaerdService: ShaerdService
    ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      pay_price: ['', [Validators.required]],
      pay_date: ['', [Validators.required]],
      pay_status: ['', [Validators.required]],
      pay_pic: ['', [Validators.required]],
    });
  }
  // save
  submitForm() {
    // case notfound in condition
    if (this.paymentForm.invalid) {
      return false;

    } else { // case success
      console.log(this.paymentForm.value);
      // register
      this.shaerdService.savePayment(this.paymentForm.value).subscribe(
        (error) => console.log(error),
      )
      this.router.navigate(['/user/reserInformation']);
    }
  }

  // reset
  resetForm() {
    this.paymentForm.reset();
  }

  get form() { return this.paymentForm.controls; }

}
