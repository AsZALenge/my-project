import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  paymentList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPayment()
  }
  getPayment() {
    this.shaerdService.getAllPayment().subscribe((data) => {
      console.log('LOGGGG getAllPayment', data);
      this.paymentList = data
    });
  };

  onPayment(data) {
    this.shaerdService.getPaymentBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG getPaymentBy_id', res);
      this.product = res;
      this.router.navigate(['/user/uploadPayment']);
    });
  }
}
