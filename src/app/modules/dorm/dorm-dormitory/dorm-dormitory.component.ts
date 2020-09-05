import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-dormitory',
  templateUrl: './dorm-dormitory.component.html',
  styleUrls: ['./dorm-dormitory.component.css']
})
export class DormDormitoryComponent implements OnInit {
  detaildormForm: FormGroup;
  API_URL_IMG = environment.api_url + "/images/"
  dorm_img: string = ''
  dataCard: { img: string; deteil: string; }[];

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup();

    // patch value in response api to form
    this.patchValueForm();

  }

  getUrlImg(): string {
    console.log('LOG >>>>> .dorm_img >>>>>:::',  this.API_URL_IMG + this.detaildormForm.value.dorm_img);
    
    return this.API_URL_IMG + this.detaildormForm.value.dorm_img;
  }

  initFormGroup() {
    this.detaildormForm = this.fb.group({
      id: ['', [Validators.required]],
      dorm_id: ['', [Validators.required]],
      dorm_name: ['', [Validators.required]],
      dorm_address: ['', [Validators.required]],
      dorm_namebank: ['', [Validators.required]],
      dorm_numbank: ['', [Validators.required]],
      dorm_img: ['', [Validators.required]],
      type_id: ['', [Validators.required]],
      dorm_waterbill: ['', [Validators.required]],
      dorm_electricbill: ['', [Validators.required]],
      dorm_status: ['', [Validators.required]],
      dorm_pricedate_start: ['', [Validators.required]],
      dorm_pricedate_end: ['', [Validators.required]],
      dorm_pricemonth_start: ['', [Validators.required]],
      dorm_pricemonth_end: ['', [Validators.required]]
    });
  }

  async patchValueForm() {
    // debugger;
    // get shop_id in request parameter router
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    await this.shaerdService.getDormByuserId(dorm).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.detaildormForm.patchValue({
        id: res.id,
        dorm_id: res.dorm_id,
        dorm_name: res.dorm_name,
        dorm_address: res.dorm_address,
        dorm_namebank: res.dorm_namebank,
        dorm_numbank: res.dorm_numbank,
        dorm_img: res.dorm_img,
        type_id: res.type_id,
        dorm_waterbill: res.dorm_waterbill,
        dorm_electricbill: res.dorm_electricbill,
        dorm_status: res.dorm_status,
        dorm_pricedate_start: res.dorm_pricedate_start,
        dorm_pricedate_end: res.dorm_pricedate_end,
        dorm_pricemonth_start: res.dorm_pricemonth_start,
        dorm_pricemonth_end: res.dorm_pricemonth_end
      });
      this.dorm_img = res.dorm_img;

      console.log(this.detaildormForm.value);
    });
  }
  submitForm() {

    this.router.navigate(['/dorm/manageDorm']);

  }
}
