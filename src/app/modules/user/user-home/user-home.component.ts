import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  dormList: Array<any>;
  DormTypeList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  statusType = '';


  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDormList('0');
  }

  getDormList(event) {
    console.log('LOG event >>:', event);

    this.statusType = event;
    console.log('LOGGGG 1  this.dormList::', this.dormList);
    if (event === '0') {
      this.shaerdService.getAllDorm().subscribe((data) => {
        console.log('LOGGGG 1 dormList', data);
        this.dormList = data;
        console.log('LOGGGG 222  this.dormList::', this.dormList);
      });
    } else {
      this.shaerdService.getDormByTypeId(event).subscribe((data) => {
        console.log('LOGGGG 2 LISTSHOP', data);
        this.DormTypeList = data;
      });
    }
  }

  onShow(data) {
    this.shaerdService.getDormBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.router.navigate(['/user/showRoom', data.dorm_id]);
    });
  }
}
