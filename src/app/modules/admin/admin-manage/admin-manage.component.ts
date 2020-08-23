import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})
export class AdminManageComponent implements OnInit {
  dormList: Array<any>;
  product;
  API_URL_IMG = environment.api_url + "/images/"
  
  constructor(
    private shaerdService: ShaerdService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getDorm();
  }

  getDorm() {
    this.shaerdService.getAllDorm().subscribe((data) => {
      console.log('LOGGGG getAllDorm', data);
      this.dormList = data
    });
  };

  onShow(data) {
    this.shaerdService.getDormBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG getDormBy_id', res);
      this.product = res;
      this.router.navigate(['/admin/manageRoom',data.dorm_id]);
    });
  }
  onDeletedorm(data) {
    this.shaerdService.deleteDormByDorm_id(data.dorm_id).subscribe((res) => { 
    window.location.reload();
      console.log('LOGGGG DELETEDORM', res);
    });
  }
}
