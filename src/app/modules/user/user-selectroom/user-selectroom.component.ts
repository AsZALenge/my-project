import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-selectroom',
  templateUrl: './user-selectroom.component.html',
  styleUrls: ['./user-selectroom.component.css']
})
export class UserSelectroomComponent implements OnInit {
  username: string;
  userShow: FormGroup;
  data: any;
  API_URL_IMG = environment.api_url + "/images/"

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup();

    // patch value in response api to form 
    this.patchValueForm();

    this.RoomMem();

    // this.DormMem();

  }

  initFormGroup() {
    this.userShow = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      citizen: ['', [Validators.required, Validators.minLength(13)]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      role: ['2', [Validators.required]]
    });
  }

  patchValueForm() {
    // get shop_id in request parameter router
    this.username = localStorage.getItem('user');
    console.log('patchValueForm : username => ', this.username);

    this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.userShow.patchValue({
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        username: res.username,
        password: res.password,
        citizen: res.citizen,
        email: res.email,
        tel: res.tel,
        gender: res.gender,
        role: res.role
      });
      console.log(this.userShow.value);
    });

  }

  async RoomMem() {
    debugger;
    let roomId = this.activatedroute.snapshot.paramMap.get("room_id");
    console.log('patchValueForm : room_id => ', roomId);

    await this.shaerdService.getRoomBy_id(roomId).subscribe((data) => {
      console.log('patchValueForm : Response getRoomBy_id => ', data);
      this.data = data;
      console.log('data : Response getRoomBy_id => ', this.data);
    });
  }

  get form() { return this.userShow.controls; }

  submitForm() {
  }
}
