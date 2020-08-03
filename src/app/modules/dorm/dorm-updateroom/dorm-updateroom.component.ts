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

  productList: Array<any>;
  product: any;
  pd_img: string = ''
  roomList = []
  editRoom: FormGroup;

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

  changShopSelected(value: any) {
    console.log('changShopSelected : value ==> ' + value)
    this.editRoom.patchValue({
      shop_id: value
    });
  }

  get form() { return this.editRoom.controls; }

  // save
  submitForm() {
    debugger
    // case notfound in condition
    if (this.editRoom.invalid) {
      return false;

    } else { // case success
      console.log(this.editRoom.value);
      // let mockdata = {
      //   "dorm_id": 0,
      //   "room_air": "string",
      //   "room_fan": "string",
      //   "room_heater": "string",
      //   "room_id": 36,
      //   "room_img": "string",
      //   "room_macwas": "string",
      //   "room_num": "string",
      //   "room_park": "string",
      //   "room_pet": "string",
      //   "room_price": "string",
      //   "room_refri": "string",
      //   "room_status": "string",
      //   "room_tv": "string",
      //   "room_wifi": "string"
      // }
      console.log('LOG DATA FN() ON invalid >>>editRoom.value<<<::', this.editRoom.value);
      // console.log('LOG DATA FN() ON invalid >>>mockdata<<<::', mockdata);

      // register
      this.shaerdService.updateRoom(this.editRoom.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
        this.router.navigate(['/dorm/selectRoomUpdate']);
      });
    }
    //   editRoom: FormGroup;
    //   roomList;
    //   product;
    //   constructor(private shaerdService: ShaerdService,
    //     private router: Router,
    //     private activatedroute: ActivatedRoute,
    //     private fb: FormBuilder) { }

    //   ngOnInit(): void {
    //     this.getRoom()
    //     this.RoomUpdate()
    //   }
    //   RoomUpdate(){
    //   this.editRoom = this.fb.group({
    //     room_num: ['', [Validators.required]],
    //     room_img: ['', [Validators.required]],
    //     room_price: ['', [Validators.required]],
    //     room_park: ['', [Validators.required]],
    //     room_wifi: ['', [Validators.required]],
    //     room_refri: ['', [Validators.required]],
    //     room_macwas: ['', [Validators.required]],
    //     room_pet: ['', [Validators.required]],
    //     room_heater: ['', [Validators.required]],
    //     room_air: ['', [Validators.required]],
    //     room_tv: ['', [Validators.required]],
    //     room_fan: ['', [Validators.required]],
    //     room_status: ['', [Validators.required]]
    //   });
    // }
    //   getRoom() {
    //     let roomId = this.activatedroute.snapshot.paramMap.get("room_id");
    //     this.shaerdService.getRoomById(roomId).subscribe((data) => {
    //       console.log('LOGGGG PROFILEROOM>>>:', data);
    //       this.roomList = data
    //     });
    //   };

    //   submitForm(roomList) {
    //       debugger
    //       // case notfound in condition
    //       if (this.editRoom.invalid) {
    //         return false;

    //       } else { // case success
    //         console.log(this.editRoom.value);
    //         console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.editRoom.value);
    //         this.router.navigate(['/dorm/selectRoomUpdate']);
    //         // register
    //         this.shaerdService.updateRoom(roomList.editRoom.value).subscribe((res) => {
    //           console.log('LOGGGG LISTSHOP', res);
    //         });
    //       }
    //     }

    // submitForm(data) {
    //   this.shaerdService.updateRoom(data.room_id).subscribe((res) => {
    //     console.log('LOGGGG LISTSHOP', res);
    //     this.product = res;
    //     this.router.navigate(['/dorm/selectRoomUpdate']);
    //   });
    // }
  }
}