import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reserinformation',
  templateUrl: './user-reserinformation.component.html',
  styleUrls: ['./user-reserinformation.component.css']
})
export class UserReserinformationComponent implements OnInit {
  memberList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMemberList();
  }
  getMemberList() {
    this.shaerdService.getAllMem().subscribe((data) => {
      console.log('LOGGGG getAllMem', data);
      this.memberList = data
    });
  };

  onShow(data) {
    this.shaerdService.getMemBy_id(data.mem_id).subscribe((res) => {
      console.log('LOGGGG getMemBy_id', res);
      this.product = res;
      this.router.navigate(['/user/showreser',data.mem_id]);
    });
  }
}
