import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dorm-recheckpayment',
  templateUrl: './dorm-recheckpayment.component.html',
  styleUrls: ['./dorm-recheckpayment.component.css']
})
export class DormRecheckpaymentComponent implements OnInit {
  showPay: FormGroup;
  API_URL_IMG = environment.api_url + "/images/"
  pay_pic: string = ''
  
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

  getUrlImg(): string {
    console.log('LOG >>>>> .pay_pic >>>>>:::',  this.API_URL_IMG + this.showPay.value.pay_pic);
    
    return this.API_URL_IMG + this.showPay.value.pay_pic;
  }

  initFormGroup() {
    this.showPay = this.fb.group({
      pay_id: ['', [Validators.required]],
      mem_id: ['', [Validators.required]],
      dorm_id: ['', [Validators.required]],
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
        dorm_id: res.dorm_id,
        pay_pic: res.pay_pic,
        pay_price: res.pay_price,
        pay_date: res.pay_date,
        pay_status: res.pay_status
      });
      console.log('showPay => ', this.showPay.value);
    });
  }
  get form() { return this.showPay.controls; }

  submitForm() {
    debugger;
    // case notfound in condition
    console.log(this.showPay.value);
    if (this.showPay.invalid) {
      return false;

    } else { // case success
      console.log(this.showPay.value);
      console.log('LOG 111111111111111 DATA FN() ON invalid >>>showPay<<<::', this.showPay.value);

      // register
      this.shaerdService.updatePay(this.showPay.value).subscribe((res) => {
        console.log('LOGGGG updatePay', res);
        // if (res.id) {
        this.router.navigate(['/dorm/checkPayment']);
        // }

      });
    }
  }

  // // save
  // submitForm() {
  //   // // case notfound in condition
  //   if (this.showPay.invalid) {
  //     return false;

  //   } else { // case success
  //     console.log(this.showPay.value);
  //     console.log('LOG DATA FN() ON invalid >>>showreser<<<::', this.showPay.value);

  //     this.shaerdService.updatePay(this.showPay.value).subscribe((res) => {
  //       console.log('LOGGGG LISTSHOP', res);
  //       this.router.navigate(['/dorm/checkPayment']);
  //     });
  //   }
  // }
}
