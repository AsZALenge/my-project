import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-reserinformation',
  templateUrl: './user-reserinformation.component.html',
  styleUrls: ['./user-reserinformation.component.css']
})
export class UserReserinformationComponent implements OnInit {
  // memData: Array<any>;
  memData : any;
  username: string;

  constructor(
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getPayList();
  }
  getPayList() {
    debugger;
     const dorm = localStorage.getItem('dorm');
    console.log('patchValueForm : userId => ', dorm);

     this.shaerdService.getMemById(dorm).subscribe((data) => {
      console.log('patchValueForm : Response getMemById => ', data);
      this.memData = data;

    });
  }

  onShow(data) {
    this.shaerdService.getMemBy_id(data.mem_id).subscribe((res) => {
      console.log('LOGGGG getMemBy_id', res);
      this.router.navigate(['/user/showreser', data.mem_id]);
    });
  }
}
