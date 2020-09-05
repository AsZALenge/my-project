import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-createconvenient',
  templateUrl: './dorm-createconvenient.component.html',
  styleUrls: ['./dorm-createconvenient.component.css']
})
export class DormCreateconvenientComponent implements OnInit {
  createCon: FormGroup;
  fileNameShow: any;
  dorm_id;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.patchValueForm();

    this.fileNameShow = 'Upload file Name';

    const userId = localStorage.getItem('dorm');
    this.shaerdService.getDormByuserId(userId).subscribe((data) => {
      this.activatedroute.snapshot.paramMap.get(this.dorm_id);
      console.log('LOGGGG getDormByuserId', data);
      this.dorm_id = data
    });
    console.log('USER ID ::::: ' + userId);

    this.createCon = this.fb.group({
      con_id: [''],
      dorm_id: [this.dorm_id],
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
    const userId = localStorage.getItem('dorm');
    this.activatedroute.snapshot.paramMap.get(userId);
    console.log('patchValueForm : dorm_id => ', userId);

    // await this.shaerdService.getDormByuserId(userId).subscribe((data) => {
    //   this.activatedroute.snapshot.paramMap.get(this.dorm_id);
    //   console.log('LOGGGG getDormByuserId', data);
    //   this.dorm_id = data
    // });
  }

  // save
  submitForm() {
    debugger;
    this.createCon.patchValue({
      dorm_id: this.dorm_id,
      con_id: '0',
    })

    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.createCon.value);
    if (this.createCon.invalid) {
      return false;

    } else { // case success
      console.log(this.createCon.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.createCon.value);
      this.router.navigate(['/dorm/mange']);
      // register
      this.shaerdService.saveCon(this.createCon.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  // reset
  resetForm() {
    this.createCon.reset();
  }

  get form() { return this.createCon.controls; }


}
