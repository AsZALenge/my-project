import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-checkpayment',
  templateUrl: './dorm-checkpayment.component.html',
  styleUrls: ['./dorm-checkpayment.component.css']
})
export class DormCheckpaymentComponent implements OnInit {
  payList: Array<any>;
  product;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPayList();
  }

  getPayList() {
    this.shaerdService.getCheckPayment().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.payList = data
    });
  };

  onShow(data) {
    this.shaerdService.getCheckPaymentBy_id(data.pay_id).subscribe((res) => {
      console.log('LOGGGG getCheckPaymentBy_id', res);
      this.product = res;
      this.router.navigate(['/dorm/reCheckPayment',data.pay_id]);
    });
  }
}
