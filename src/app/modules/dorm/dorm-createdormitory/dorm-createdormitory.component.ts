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

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('dorm');

    console.log('USER ID ::::: ' + userId);

    this.createdormForm = this.fb.group({
      id: [userId, [Validators.required]],
      dorm_name: ['', [Validators.required]],
      dorm_address: ['', [Validators.required]],
      dorm_namebank: ['', [Validators.required]],
      dorm_numbank: ['', [Validators.required]],
      dorm_img: ['', [Validators.required]],
    });
  }

  // patchValueForm() {
  //   // get shop_id in request parameter router
  //   this.username = localStorage.getItem('user');
  //   console.log('patchValueForm : username => ', this.username);

  //   this.shaerdService.getUser(this.username).subscribe((res) => {
  //     console.log('patchValueForm : Response => ', res);

  //     // patch value to form
  //     this.createdormForm.patchValue({
  //       id: res.id,
  //       first_name: res.first_name,
  //       last_name: res.last_name,
  //       username: res.username,
  //       password: res.password,
  //       address: res.address,
  //       tel: res.tel,
  //       gender: res.gender,
  //     });
  //     console.log(this.createdormForm.value);
  //   });

  // }

  // save
  submitForm() {

    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.createdormForm.value);
    if (this.createdormForm.invalid) {
      return false;

    } else { // case success
      console.log(this.createdormForm.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.createdormForm.value);
      this.router.navigate(['/dorm/detailDorm']);
      // register
      this.shaerdService.createdorm(this.createdormForm.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  saveRange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log('LOGGGGGGGGG FILE NAME >>:', file.name);
        console.log('LOGGGGGGGGG DATA saveRange>>:', reader.result);
        this.createdormForm.patchValue({
          dorm_img: file.name
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
