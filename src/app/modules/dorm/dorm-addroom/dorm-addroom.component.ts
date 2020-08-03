import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-addroom',
  templateUrl: './dorm-addroom.component.html',
  styleUrls: ['./dorm-addroom.component.css']
})
export class DormAddroomComponent implements OnInit {
  addRoom: FormGroup;
  saveRoom;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addRoom = this.fb.group({
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
  }
  // reset
  resetForm() {
    this.addRoom.reset();
  }

  get form() { return this.addRoom.controls; }

}
