import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-home',
  templateUrl: './dorm-home.component.html',
  styleUrls: ['./dorm-home.component.css']
})
export class DormHomeComponent implements OnInit {
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
      console.log('LOGGGG getRoomList', data);
      this.roomList = data
    });
  };
}
