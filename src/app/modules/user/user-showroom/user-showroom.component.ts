import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-showroom',
  templateUrl: './user-showroom.component.html',
  styleUrls: ['./user-showroom.component.css']
})
export class UserShowroomComponent implements OnInit {
  roomList: Array<any>;
  conList: Array<any>;
  dormList: Array<any>;
  loading = false;
  a: FormGroup;
  API_URL_IMG = environment.api_url + "/images/"

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getProductList();
    this.patchValueForm()

    this.initFormGroup()
  }

  initFormGroup() {
    this.a = this.fb.group({
    });
  }
  async patchValueForm() {
    let roomId = this.activatedroute.snapshot.paramMap.get("dorm_id");
    console.log('patchValueForm : dorm_id => ', roomId);

    await this.shaerdService.getRoomBydormId(roomId).subscribe((res) => {
      console.log('patchValueForm : Response getRoomById => ', res);
      this.roomList = res;
      // patch value to form
      this.shaerdService.getDormByDormID(roomId).subscribe((data) => {
        console.log('LOGGGG getDormByDormID', data);
        this.conList = data

        this.shaerdService.getConByDormId(roomId).subscribe((data) => {
          console.log('LOGGGG getConByDormId', data);
          this.dormList = data
        });
      });
    });
  }

  select(data) {
    // this.shaerdService.getRoomBy_id(data.room_id).subscribe((res) => {
    console.log('LOGGGG select', data);
    this.router.navigate(['/user/selectRoom', data.room_id]);
    // });
  }
}
