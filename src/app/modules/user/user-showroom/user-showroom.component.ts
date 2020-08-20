import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-showroom',
  templateUrl: './user-showroom.component.html',
  styleUrls: ['./user-showroom.component.css']
})
export class UserShowroomComponent implements OnInit {
  roomList: Array<any>;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRoomList();
  }

  getRoomList() {
    this.shaerdService.getAllRoom().subscribe((data) => {
      console.log('LOGGGG getAllRoom', data);
      this.roomList = data
    });
  };

  onShowdetail(data) {
    // this.shaerdService.getRoomBy_id(data.room_id).subscribe((res) => {
      console.log('LOGGGG getRoomBy_id', data);
      this.router.navigate(['/user/selectRoom', data.room_id]);
    // });
  }
}
