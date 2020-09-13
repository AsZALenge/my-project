import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dorm-home',
  templateUrl: './dorm-home.component.html',
  styleUrls: ['./dorm-home.component.css']
})
export class DormHomeComponent implements OnInit {
  roomList: any;
  dormData: any;
  detaildormForm: FormGroup;
  API_URL_IMG = environment.api_url + "/images/"


  constructor(
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getRoomList();

  }

  getRoomList() {
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getDormByuserId(dorm).subscribe((dataDorm) => {
      console.log('LOGGGG dataUser', dataDorm);
      this.dormData = dataDorm;

      this.shaerdService.getRoomBydormId(dataDorm.dorm_id).subscribe((dataDorm) => {
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
}
