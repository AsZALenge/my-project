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
  memberList: Array<any>;
  username: string;
  room_id: string;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPayList();
  }
  getPayList() {
    const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

    this.shaerdService.getMemById(dorm).subscribe((dataMem) => {
      console.log('LOGGGG dataMem', dataMem);
      this.memberList = dataMem;
    });
  }

  // onShow(data) {
  //   this.shaerdService.getMemBy_id(data.mem_id).subscribe((res) => {
  //     console.log('LOGGGG getMemBy_id', res);
  //     this.router.navigate(['/user/showreser', data.mem_id]);
  //   });
  // }
}
