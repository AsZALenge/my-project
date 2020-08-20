import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dorm-recheckpayment',
  templateUrl: './dorm-recheckpayment.component.html',
  styleUrls: ['./dorm-recheckpayment.component.css']
})
export class DormRecheckpaymentComponent implements OnInit {
  showPay: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // init form group
    this.initFormGroup()

    // patch value in response api to form 
    this.patchValueForm()

  }
  initFormGroup() {
    this.showPay = this.fb.group({
      pay_id: ['', [Validators.required]],
      mem_id: ['', [Validators.required]],
      pay_pic: ['', [Validators.required]],
      pay_price: ['', [Validators.required]],
      pay_date: ['', [Validators.required]],
      pay_status: ['', [Validators.required]]
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    let payId = this.activatedroute.snapshot.paramMap.get("pay_id");
    console.log('patchValueForm : pay_id => ', payId);

    await this.shaerdService.getCheckPaymentBy_id(payId).subscribe((res) => {
      console.log('patchValueForm : Response getCheckPaymentBy_id => ', res);

      // patch value to form
      this.showPay.patchValue({
        pay_id: res.pay_id,
        mem_id: res.mem_id,
        pay_pic: res.pay_pic,
        pay_price: res.pay_price,
        pay_date: res.pay_date,
        pay_status: res.pay_status
      });
      console.log('showPay => ', this.showPay.value);
    });
  }
  get form() { return this.showPay.controls; }

  // save
  submitForm() {
    // // case notfound in condition
    // if (this.showreser.invalid) {
    //   return false;

    // } else { // case success
    //   console.log(this.showreser.value);
    //   console.log('LOG DATA FN() ON invalid >>>showreser<<<::', this.showreser.value);

    //   this.shaerdService.updateRoom(this.showreser.value).subscribe((res) => {
    //     console.log('LOGGGG LISTSHOP', res);
        this.router.navigate(['/dorm/checkPayment']);
      // });
    // }
  }
}
