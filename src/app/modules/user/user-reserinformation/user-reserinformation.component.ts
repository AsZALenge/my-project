import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-reserinformation',
  templateUrl: './user-reserinformation.component.html',
  styleUrls: ['./user-reserinformation.component.css']
})
export class UserReserinformationComponent implements OnInit {
  memData: any;
  username: string;
  dormData: any;
  roomData: any;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPayList();
  }
  getPayList() {
    debugger;
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getMemById(dorm).subscribe((data) => {
      console.log('LOGGGG memData', data);
      this.memData = data;

      this.shaerdService.getRoomBy_id(dorm).subscribe((data) => {
        console.log('patchValueForm : Response getRoomBy_id => ', data);
        this.roomData = data;
        this.shaerdService.getDormBy_id(data.dorm_id).subscribe((data) => {
          console.log('LOGGGG  getDormBy_id', data);
          this.dormData = data;
        });
      });
    });
  }

  onShow(data) {
    this.shaerdService.getMemBy_id(data.mem_id).subscribe((res) => {
      console.log('LOGGGG getMemBy_id', res);
      this.router.navigate(['/user/showreser', data.mem_id]);
    });
  }
}
