import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-managedorm',
  templateUrl: './dorm-managedorm.component.html',
  styleUrls: ['./dorm-managedorm.component.css']
})
export class DormManagedormComponent implements OnInit {
  managedormForm: FormGroup;
  fileNameShow: any;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fileNameShow = 'Upload file Name';
    // init form group
    this.initFormGroup();

    // patch value in response api to form
    this.patchValueForm();

  }
  initFormGroup() {
    this.managedormForm = this.fb.group({
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
      this.managedormForm.patchValue({
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
      console.log(this.managedormForm.value);
    });
  }
  get form() { return this.managedormForm.controls; }

  update() {
    // debugger
    // case notfound in condition
    console.log(this.managedormForm.value);
    if (this.managedormForm.invalid) {
      return false;

    } else { // case success
      console.log(this.managedormForm.value);
      console.log('LOG 111111111111111 DATA FN() ON invalid >>>managedormForm<<<::', this.managedormForm.value);

      // register
      this.shaerdService.updateDorm(this.managedormForm.value).subscribe((res) => {
        console.log('LOGGGG update', res);
        // if (res.id) {
        this.router.navigate(['dorm/detailDorm']);
        // }

      });
    }
  }
  uploadImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileNameShow = file.name;
        console.log(this.fileNameShow);
        this.managedormForm.patchValue({

          dorm_img: file.name
        });
        // for upload
        const formData = new FormData();
        formData.append('file', file);
        this.shaerdService.uploadImage(formData).subscribe(res => {
          alert('UploadFile :: ' + res);
        });

      };
    }
  }

}
