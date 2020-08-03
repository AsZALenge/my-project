import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorm-updateprofile',
  templateUrl: './dorm-updateprofile.component.html',
  styleUrls: ['./dorm-updateprofile.component.css']
})
export class DormUpdateprofileComponent implements OnInit {
  profileList;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfile()
  }
  getProfile() {
    let dormId = this.activatedroute.snapshot.paramMap.get("dorm_id");
    this.shaerdService.getDormProBy_id(dormId).subscribe((data) => {
      console.log('LOGGGG PROFILEROOM>>>:', data);
      this.profileList = data
    });
  };

  onProfile(data) {
    this.shaerdService.updateDorm(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/dorm/profile', data.dorm_id]);
    });
  }
}
