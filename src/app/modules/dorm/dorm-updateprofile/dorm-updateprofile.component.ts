import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-updateprofile',
  templateUrl: './dorm-updateprofile.component.html',
  styleUrls: ['./dorm-updateprofile.component.css']
})
export class DormUpdateprofileComponent implements OnInit {
  id: any
  username: string;

  editprofileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup()

    // patch value in response api to form 
    this.patchValueForm()

  }
  initFormGroup() {
    this.editprofileForm = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      citizen: ['', [Validators.required, Validators.minLength(13)]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      role: ['3', [Validators.required]],
      status: ['active', [Validators.required]]
    });
  }

  async patchValueForm() {

    // get pd_id in request parameter router
    this.username = localStorage.getItem('user');
    console.log('patchValueForm : username => ', this.username);

    console.log(this.editprofileForm.value);
    await this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('patchValueForm11111 : Response => ', res);

      // patch value to form
      this.editprofileForm.patchValue({
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        username: res.username,
        password: res.password,
        citizen: res.citizen,
        email: res.email,
        tel: res.tel,
        gender: res.gender,
        role: res.role
      });
      console.log(this.editprofileForm.value);
    });
    console.log(this.editprofileForm.value);
  }
  get form() { return this.editprofileForm.controls; }

  // save
  update() {
    // debugger
    // case notfound in condition
    console.log(this.editprofileForm.value);
    if (this.editprofileForm.invalid) {
      return false;

    } else { // case success
      console.log(this.editprofileForm.value);
      console.log('LOG 111111111111111 DATA FN() ON invalid >>>editprofileForm<<<::', this.editprofileForm.value);

      // register
      this.shaerdService.update(this.editprofileForm.value).subscribe((res) => {
        console.log('LOGGGG update', res);
        // if (res.id) {
        this.router.navigate(['dorm/profile']);
        // }

      });
    }
  }
}
