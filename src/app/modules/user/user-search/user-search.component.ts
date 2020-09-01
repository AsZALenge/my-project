import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  dormList: Array<any>;
  product;
  API_URL_IMG = environment.api_url + "/images/"
  term: string;

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
      this.router.navigate(['/user/showRoom', data.dorm_id]);
    });
  }
}
