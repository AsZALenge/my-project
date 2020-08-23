import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-manageroom',
  templateUrl: './admin-manageroom.component.html',
  styleUrls: ['./admin-manageroom.component.css']
})
export class AdminManageroomComponent implements OnInit {
  roomList: Array<any>;

  a:FormGroup;
  API_URL_IMG = environment.api_url + "/images/"

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute

    ) { }

  ngOnInit(): void {
    // this.getProductList();
    this.patchValueForm()

    this.initFormGroup()
  }
  initFormGroup() {
    this.a = this.fb.group({
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
    let roomId = this.activatedroute.snapshot.paramMap.get("dorm_id");
    console.log('patchValueForm : dorm_id => ', roomId);

    await this.shaerdService.getRoomBydormId(roomId).subscribe((res) => {
      console.log('patchValueForm : Response getRoomById => ', res);
      this.roomList = res;
      // patch value to form
    });
  }

  onDeleteroom(data) {
    this.shaerdService.deleteRoomByRoom_id(data.room_id).subscribe((res) => {
      window.location.reload();
      console.log('LOGGGG DELETEROOM', res);
    });
  }
}
