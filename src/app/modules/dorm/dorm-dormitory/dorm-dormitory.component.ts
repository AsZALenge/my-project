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

  initFormGroup() {
    this.detaildormForm = this.fb.group({
      dorm_id: [''],
      id: [''],
      dorm_name: ['', [Validators.required]],
      dorm_address: ['', [Validators.required]],
      dorm_namebank: ['', [Validators.required]],
      dorm_numbank: ['', [Validators.required]],
      dorm_img: ['', [Validators.required]],
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
        dorm_img: res.dorm_img
      });
      console.log(this.detaildormForm.value);
    });
  }
  submitForm() {

    this.router.navigate(['/dorm/manageDorm']);

  }
}
