import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-profile',
  templateUrl: './dorm-profile.component.html',
  styleUrls: ['./dorm-profile.component.css']
})
export class DormProfileComponent implements OnInit {
  username: string;
  profileForm: FormGroup;

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
    this.profileForm = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      citizen: ['', [Validators.required, Validators.minLength(13)]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      role: ['3', [Validators.required]]
    });
  }

  patchValueForm() {
    // get shop_id in request parameter router
    this.username = localStorage.getItem('user');
    console.log('patchValueForm : username => ', this.username);

    this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.profileForm.patchValue({
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
      console.log(this.profileForm.value);
    });

  }

  // submitForm() {
  //   // case notfound in condition
  //   if (this.profileForm.invalid) {
  //     return false;

  //   } else { // case success
  //     console.log(this.profileForm.value);
  //     console.log('LOG DATA FN() ON invalid >>>profileForm.value<<<::', this.profileForm.value);

  //     this.shaerdService.update(this.profileForm.value).subscribe((res) => {
  //       console.log('LOGGGG LISTSHOP', res);
  //       this.router.navigate(['/dorm/updateProfile']);
  //     });
  //   }
  // }
}
