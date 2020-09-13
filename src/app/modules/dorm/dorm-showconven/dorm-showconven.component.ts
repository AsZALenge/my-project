import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-showconven',
  templateUrl: './dorm-showconven.component.html',
  styleUrls: ['./dorm-showconven.component.css']
})
export class DormShowconvenComponent implements OnInit {
  showCon: FormGroup;
  fileNameShow: any;
  dorm;
  dorm_id: string;
  con_id: string;
  con;
  res: FormGroup;

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

    // this.patchValueForm();

    // this.fileNameShow = 'Upload file Name';

    // const userId = localStorage.getItem('dorm');
    // this.shaerdService.getDormByuserId(userId).subscribe((data) => {
    //   this.activatedroute.snapshot.paramMap.get(this.dorm_id);
    //   console.log('LOGGGG getDormByuserId', data);
    //   this.dorm = data
    // });
    // console.log('USER ID ::::: ' + userId);

  }

  initFormGroup() {
    this.showCon = this.fb.group({
      con_id: [''],
      dorm_id: [''],
      con_park: ['', [Validators.required]],
      con_wifi: ['', [Validators.required]],
      con_washing: ['', [Validators.required]],
      con_waterfilter: ['', [Validators.required]],
      con_keycard: ['', [Validators.required]],
      con_pet: ['', [Validators.required]],
      con_securitycctv: ['', [Validators.required]],
      con_smoking: ['', [Validators.required]],
    });
  }

  patchValueForm() {
    debugger;
    const userId = localStorage.getItem('dorm');
    this.activatedroute.snapshot.paramMap.get(userId);
    console.log('patchValueForm : dorm_id => ', userId);

    this.shaerdService.getDormByuserId(userId).subscribe((res) => {
      this.activatedroute.snapshot.paramMap.get(this.dorm_id);
      console.log('LOGGGG getDormByuserId', res);
      this.dorm_id = res;

      this.shaerdService.getConByDormId(this.dorm_id).subscribe((res) => {
        console.log('patchValueForm : Response => ', res);
        // patch value to form
        this.showCon.patchValue({
          con_id: res.con_id,
          dorm_id: res.dorm_id,
          con_park: res.con_park,
          con_wifi: res.con_wifi,
          con_washing: res.con_washing,
          con_waterfilter: res.con_waterfilter,
          con_keycard: res.con_keycard,
          con_pet: res.con_pet,
          con_securitycctv: res.con_securitycctv,
          con_smoking: res.con_smoking
        });
        console.log('showCon => ', this.showCon.value);
      });
    });
  }

  // save
  submitForm() {
    // debugger;
    // this.showCon.patchValue({
    //   dorm_id: this.dorm.dorm_id,
    //   con_id: '0',
    // })

    // console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.showCon.value);
    // if (this.showCon.invalid) {
    //   return false;

    // } else { // case success
    //   console.log(this.showCon.value);
    //   console.log('LOG DATA FN() >>>submitForm<<<::', this.showCon.value);
    //   this.router.navigate(['/dorm/manage']);
    //   // register
    //   this.shaerdService.saveCon(this.showCon.value).subscribe(
    //     (error) => console.log(error)
    //   );
    //   alert('ท่านได้สร้างหอพัก และเพิ่มสิ่งอำนวยความสะดวกเรียบร้อยแล้ว')
    // }
  }

  get form() { return this.showCon.controls; }

}
