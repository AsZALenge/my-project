import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-user-selectroom',
  templateUrl: './user-selectroom.component.html',
  styleUrls: ['./user-selectroom.component.css']
})
export class UserSelectroomComponent implements OnInit {
  roomList;
  product;
  constructor(
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.getRoomList();
  }

  getRoomList() {
    let roomId = this.activatedroute.snapshot.paramMap.get("room_id");
    this.shaerdService.getRoomBy_id(roomId).subscribe((data) => {
      console.log('LOGGGG PROFILEROOM>>>:', data);
      this.roomList = data
    });
  };

  onSelect(data) {
    this.shaerdService.getRoomBy_id(data.room_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/payment']);
    });
  }
}
