import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dorm-updateroom',
  templateUrl: './dorm-updateroom.component.html',
  styleUrls: ['./dorm-updateroom.component.css']
})
export class DormUpdateroomComponent implements OnInit {
  editRoom: FormGroup;
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
    this.initFormGroup()

    // patch value in response api to form 
    this.patchValueForm()

  }

  initFormGroup() {
    this.editRoom = this.fb.group({
      room_num: ['', [Validators.required]],
      room_img: ['', [Validators.required]],
      room_price: ['', [Validators.required]],
      room_park: ['', [Validators.required]],
      room_wifi: ['', [Validators.required]],
      room_refri: ['', [Validators.required]],
      room_macwas: ['', [Validators.required]],
      room_pet: ['', [Validators.required]],
      room_heater: ['', [Validators.required]],
      room_air: ['', [Validators.required]],
      room_tv: ['', [Validators.required]],
      room_fan: ['', [Validators.required]],
      room_status: ['', [Validators.required]],
      dorm_id: ['', [Validators.required]],
      room_id: ['', [Validators.required]]
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    let roomId = this.activatedroute.snapshot.paramMap.get("room_id");
    console.log('patchValueForm : room_id => ', roomId);

    await this.shaerdService.getRoomById(roomId).subscribe((res) => {
      console.log('patchValueForm : Response getRoomById => ', res);

      // patch value to form
      this.editRoom.patchValue({
        room_num: res.room_num,
        room_img: res.room_img,
        room_price: res.room_price,
        room_park: res.room_park,
        room_wifi: res.room_wifi,
        room_refri: res.room_refri,
        room_macwas: res.room_macwas,
        room_pet: res.room_pet,
        room_heater: res.room_heater,
        room_air: res.room_air,
        room_tv: res.room_tv,
        room_fan: res.room_fan,
        room_status: res.room_status,
        room_id: res.room_id,
        dorm_id: res.dorm_id
      });
      console.log('editRoom => ', this.editRoom.value);
    });
  }
  get form() { return this.editRoom.controls; }

  // save
  submitForm() {
    // case notfound in condition
    if (this.editRoom.invalid) {
      return false;

    } else { // case success
      console.log(this.editRoom.value);
      console.log('LOG DATA FN() ON invalid >>>editRoom.value<<<::', this.editRoom.value);

      this.shaerdService.updateRoom(this.editRoom.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
        this.router.navigate(['/dorm/selectRoomUpdate']);
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
        this.editRoom.patchValue({

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

  cancelForm() {
    this.router.navigate(['/dorm/selectRoomUpdate']);
  }
}