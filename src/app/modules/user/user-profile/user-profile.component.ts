import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileList: Array<any>;
  product;
  constructor(private shaerdService: ShaerdService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }
  getProfile() {
    this.shaerdService.getAllProfile().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.profileList = data
    });
  };

  onProfile(data) {
    this.shaerdService.getProBy_id(data.user_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/updateProfile']);
    });
  }
}
