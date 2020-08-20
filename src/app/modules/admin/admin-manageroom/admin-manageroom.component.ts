import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manageroom',
  templateUrl: './admin-manageroom.component.html',
  styleUrls: ['./admin-manageroom.component.css']
})
export class AdminManageroomComponent implements OnInit {
  roomList: Array<any>;
  product;

  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.shaerdService.getAllRoom().subscribe((data) => {
      console.log('LOGGGG getAllRoom', data);
      this.roomList = data
    });
  };

  onDeleteroom(data) {
    this.shaerdService.deleteRoomByRoom_id(data.room_id).subscribe((res) => {
      window.location.reload();
      console.log('LOGGGG DELETEROOM', res);
    });
  }
}
