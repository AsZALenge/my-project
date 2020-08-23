import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dorm-selectroomupdate',
  templateUrl: './dorm-selectroomupdate.component.html',
  styleUrls: ['./dorm-selectroomupdate.component.css']
})
export class DormSelectroomupdateComponent implements OnInit {
  roomList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  
  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllroomList();
  }
  
  getAllroomList() {
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getDormByuserId(dorm).subscribe((dataUser) => {
      console.log('LOGGGG dataUser', dataUser);

      this.shaerdService.getRoomBydormId(dataUser.dorm_id).subscribe((dataDorm) => {
        console.log('LOGGGG dataDorm', dataDorm);
        this.roomList = dataDorm;
      });
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
