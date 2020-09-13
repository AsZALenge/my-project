import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-dorm-addroom',
  templateUrl: './dorm-addroom.component.html',
  styleUrls: ['./dorm-addroom.component.css']
})
export class DormAddroomComponent implements OnInit {
  addRoom: FormGroup;
  loading = false;
  fileNameShow: any;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fileNameShow = 'Upload file Name';

    const userId = localStorage.getItem('dorm');

    console.log('USER ID ::::: ' + userId);

    this.shaerdService.getDormByuserId(userId).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.addRoom.patchValue({
        id: res.id,
        dorm_id: res.dorm_id,
        dorm_name: res.dorm_name,
        dorm_address: res.dorm_address,
        dorm_namebank: res.dorm_namebank,
        dorm_numbank: res.dorm_numbank,
        dorm_img: res.dorm_img
      });
      console.log(this.addRoom.value);
    });

    this.addRoom = this.fb.group({
      id: [userId],
      dorm_id: [''],
      room_id: [''],
      room_num: ['', [Validators.required]],
      room_img: ['', [Validators.required]],
      room_price: ['', [Validators.required]],
      room_refrigerator: ['', [Validators.required]],
      room_waterheater: ['', [Validators.required]],
      room_air: ['', [Validators.required]],
      room_tv: ['', [Validators.required]],
      room_fan: ['', [Validators.required]],
      room_status: ['', [Validators.required]]
    });
  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.addRoom.invalid) {
      return false;

    } else { // case success
      console.log(this.addRoom.value);
      // register
      this.shaerdService.addroom(this.addRoom.value).subscribe(
        (error) => console.log(error),
      );
    } {
      this.router.navigate(['/dorm/mange']);
    }

    alert('สร้างห้องเรียบร้อยแล้ว')
  }

  uploadImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileNameShow = file.name;
        console.log(this.fileNameShow);
        this.addRoom.patchValue({

          room_img: file.name
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
    this.addRoom.reset();
  }

  get form() { return this.addRoom.controls; }

}
