import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorm-profile',
  templateUrl: './dorm-profile.component.html',
  styleUrls: ['./dorm-profile.component.css']
})
export class DormProfileComponent implements OnInit {
  profileList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }
  getProfile() {
    this.shaerdService.getDormProfile().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.profileList = data
    });
  };

  onProfile(data) {
    this.shaerdService.getDormProBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/dorm/updateProfile', data.dorm_id]);
    });
  }
}
