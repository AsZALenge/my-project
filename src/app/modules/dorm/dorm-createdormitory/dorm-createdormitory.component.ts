import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-createdormitory',
  templateUrl: './dorm-createdormitory.component.html',
  styleUrls: ['./dorm-createdormitory.component.css']
})
export class DormCreatedormitoryComponent implements OnInit {
  createdormForm: FormGroup;
  fileNameShow: any;
  dorm_id: any;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fileNameShow = 'Upload file Name';

    const userId = localStorage.getItem('dorm');

    console.log('USER ID ::::: ' + userId);

    this.createdormForm = this.fb.group({
      id: [userId, [Validators.required]],
      dorm_id: ['0', [Validators.required]],
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
  // save
  submitForm() {
    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.createdormForm.value);
    if (this.createdormForm.invalid) {
      return false;

    } else { // case success
      console.log(this.createdormForm.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.createdormForm.value);
      this.router.navigate(['/dorm/createCon',this.dorm_id]);
      // register
      this.shaerdService.createdorm(this.createdormForm.value).subscribe(
        (error) => console.log(error)
      );
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
        this.createdormForm.patchValue({

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

  // reset
  resetForm() {
    this.createdormForm.reset();
  }

  get form() { return this.createdormForm.controls; }

}
