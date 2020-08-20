import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dorm-selectroomupdate',
  templateUrl: './dorm-selectroomupdate.component.html',
  styleUrls: ['./dorm-selectroomupdate.component.css']
})
export class DormSelectroomupdateComponent implements OnInit {
  roomList: Array<any>;


  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllroomList();
  }

  getAllroomList() {
    this.shaerdService.getAllRoom().subscribe((data) => {
      console.log('LOGGGG getAllRoom', data);
      this.roomList = data
    });
  };

  onEdit(data) {
    // this.shaerdService.getRoomBy_id(data.room_id).subscribe((res) => {
      console.log('LOGGGG onEdit', data);
      this.router.navigate(['/dorm/updateRoom',data.room_id]);
    // });
  }
  onDelete(data) {
    this.shaerdService.deleteRoomByRoom_id(data.room_id).subscribe((res) => { 
    window.location.reload();
      console.log('LOGGGG onDelete', res);
    });
  }
}
