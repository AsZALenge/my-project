import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-updateconven',
  templateUrl: './dorm-updateconven.component.html',
  styleUrls: ['./dorm-updateconven.component.css']
})
export class DormUpdateconvenComponent implements OnInit {
  updateCon: FormGroup;
  fileNameShow: any;
  cons;
  dorm_id: string;

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

    // this.createCon = this.fb.group({
    //   con_id: [''],
    //   dorm_id: [''],
    //   con_park: ['', [Validators.required]],
    //   con_wifi: ['', [Validators.required]],
    //   con_washing: ['', [Validators.required]],
    //   con_waterfilter: ['', [Validators.required]],
    //   con_keycard: ['', [Validators.required]],
    //   con_pet: ['', [Validators.required]],
    //   con_securitycctv: ['', [Validators.required]],
    //   con_smoking: ['', [Validators.required]],
    // });
  }

  initFormGroup() {
    this.updateCon = this.fb.group({
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

  async patchValueForm() {
    debugger;
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getDormByuserId(dorm).subscribe((dataUser) => {
      console.log('LOGGGG dataUser', dataUser);
      this.cons = dataUser;

      this.shaerdService.getConByDormId(dataUser).subscribe((res) => {
        console.log('LOGGGG getConByDormId', res);

        this.updateCon.patchValue({
          con_id: res.con_id,
          dorm_id: res.dorm_id,
          con_park: res.con_park,
          con_wifi: res.con_wifi,
          con_washing: res.con_washing,
          con_waterfilter: res.con_waterfilter,
          con_keycard: res.con_keycard,
          con_pet: res.con_pet,
          con_securitycctv: res.con_securitycctv,
          con_smoking: res.con_smoking,
        });
      });
      console.log('updateCon => ', this.updateCon.value);
    });
  }
  get form() { return this.updateCon.controls; }

  // save
  submitForm() {
    debugger;
    this.updateCon.patchValue({
      dorm_id: this.dorm_id,
      con_id: '0',
    })

    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.updateCon.value);
    if (this.updateCon.invalid) {
      return false;

    } else { // case success
      console.log(this.updateCon.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.updateCon.value);
      this.router.navigate(['/dorm']);
      // register
      this.shaerdService.saveCon(this.updateCon.value).subscribe(
        (error) => console.log(error)
      );
      alert('ท่านได้สร้างหอพัก และเพิ่มสิ่งอำนวยความสะดวกเรียบร้อยแล้ว')
    }
  }

}
