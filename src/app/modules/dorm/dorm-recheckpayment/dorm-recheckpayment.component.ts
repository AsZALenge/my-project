import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-recheckpayment',
  templateUrl: './dorm-recheckpayment.component.html',
  styleUrls: ['./dorm-recheckpayment.component.css']
})
export class DormRecheckpaymentComponent implements OnInit { 
  checkList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCheckPay()
  }
  getCheckPay() {
    this.shaerdService.getCheckPay().subscribe((data) => {
      console.log('LOGGGG PROFILEPAY', data);
      this.checkList = data
    });
  };

  onCheck() {
    // this.shaerdService.getDormProBy_id(data.dorm_id).subscribe((res) => {
    //   console.log('LOGGGG LISTSHOP', res);
    //   this.product = res;
      this.router.navigate(['/dorm/checkPayment']);
    // });
  }
}
