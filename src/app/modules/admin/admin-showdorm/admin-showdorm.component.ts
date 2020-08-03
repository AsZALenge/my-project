import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-showdorm',
  templateUrl: './admin-showdorm.component.html',
  styleUrls: ['./admin-showdorm.component.css']
})
export class AdminShowdormComponent implements OnInit {
  dormList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }
    

  ngOnInit(): void {
    this.getDorm();
  }

  getDorm() {
    this.shaerdService.getAllDorm().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.dormList = data
    });
  };

  onShow(data) {
    this.shaerdService.getDormBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/admin/manageRoom']);
    });
  }
}
