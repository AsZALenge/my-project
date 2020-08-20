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
    this.managedormForm = this.fb.group({
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
      this.managedormForm.patchValue({
        id: res.id,
        dorm_id: res.dorm_id,
        dorm_name: res.dorm_name,
        dorm_address: res.dorm_address,
        dorm_namebank: res.dorm_namebank,
        dorm_numbank: res.dorm_numbank,
        dorm_img: res.dorm_img
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

}
