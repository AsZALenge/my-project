import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dorm-checkpayment',
  templateUrl: './dorm-checkpayment.component.html',
  styleUrls: ['./dorm-checkpayment.component.css']
})
export class DormCheckpaymentComponent implements OnInit {
  payList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  product;
  username: string;
  room_id: string;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPayList();
  }
  getPayList() {
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getDormByuserId(dorm).subscribe((dataDorm) => {
      console.log('LOGGGG dataDorm', dataDorm);

      this.shaerdService.getMemBydormId(dataDorm.dorm_id).subscribe((dataMem) => {
        console.log('LOGGGG dataMem', dataMem);
        this.payList = dataMem;

        this.shaerdService.getPayBydormId(dataDorm.dorm_id).subscribe((dataPay) => {
          console.log('LOGGGG dataPay', dataPay);
          this.payList = dataPay;
        });
      });
    });
  }
  // getPayList() {
  //   this.shaerdService.getCheckPayment().subscribe((data) => {
  //     console.log('LOGGGG LISTSHOP', data);
  //     this.payList = data
  //   });
  // };

  onShow(data) {
    this.shaerdService.getCheckPaymentBy_id(data.pay_id).subscribe((res) => {
      console.log('LOGGGG getCheckPaymentBy_id', res);
      this.product = res;
      this.router.navigate(['/dorm/reCheckPayment', data.pay_id]);
    });
  }
}
