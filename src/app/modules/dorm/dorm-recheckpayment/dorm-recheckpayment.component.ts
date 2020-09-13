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
  memData: any;
  API_URL_IMG = environment.api_url + "/images/"


  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.patchValueForm()

  }


  async patchValueForm() {

    debugger;

    let memID = this.activatedroute.snapshot.paramMap.get("mem_id");
    console.log('patchValueForm : mem_id => ', memID);

    await this.shaerdService.getMemBy_id(memID).subscribe((res) => {
      console.log('patchValueForm : Response getMemBy_id => ', res);
      this.memData = res;
    });
  }

  submitForm() {
    this.router.navigate(['/dorm/checkPayment']);
  }
}
