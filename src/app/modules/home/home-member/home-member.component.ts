import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-member',
  templateUrl: './home-member.component.html',
  styleUrls: ['./home-member.component.css'],
  providers: [DatePipe]
})
export class HomeMemberComponent implements OnInit {
  username: string;
  userShow: FormGroup;
  bankList: any;
  data: any;
  fileNameShow: any;
  API_URL_IMG = environment.api_url + "/images/"
  mockListSubject = [];

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    this.fileNameShow = 'Upload file Name';

    this.RoomMem();

    this.initFormGroup();

    this.patchValueForm();

  }

  initFormGroup() {
    this.userShow = this.fb.group({
      mem_id: [''],
      id: [''],
      dorm_id: [''],
      room_id: [''],
      mem_ref: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      citizen: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      room_price: [0, [Validators.required]],
      mem_guest: ['', [Validators.required]],
      date_of_stay: ['', [Validators.required]],
      deposit: [0, [Validators.required]],
      deposit_status: [0, [Validators.required]],
      mem_reserdate: ['', [Validators.required]],
      mem_img: ['', [Validators.required]],
    });
  }

  patchValueForm() {
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
        role: res.role,
        //mem
        mem_id: res.mem_id,
        dorm_id: res.dorm_id,
        room_id: res.room_id,
        mem_ref: this.datePipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss'),
        mem_guest: res.mem_guest,
        date_of_stay: res.date_of_stay,
        deposit: res.deposit,
        deposit_status: res.deposit_status,
        mem_img: res.mem_img,
        mem_reserdate: this.datePipe.transform(new Date(), 'dd-MM-yyyy'),

      });
      console.log(this.userShow.value);
    });
    // });
  }
  get form() { return this.userShow.controls; }

  async RoomMem() {debugger

    let roomId = this.activatedroute.snapshot.paramMap.get("room_id");
    console.log('patchValueForm : room_id => ', roomId);

    await this.shaerdService.getRoomBy_id(roomId).subscribe((data) => {
      console.log('patchValueForm : Response getRoomBy_id => ', data);
      this.data = data;

      this.userShow.patchValue({
        room_price: (30 / 100) * data.room_price
      })
      this.shaerdService.getDormBy_id(data.dorm_id).subscribe((data) => {
        console.log('LOGGGG  getDormBy_id', data);
        this.bankList = data;
      });
    });
  }

  submitForm() {
    debugger;
    this.userShow.patchValue({
      dorm_id: this.data.dorm_id,
      id: '0',
      deposit_status: 'รอการตรวจสอบ',
      mem_ref: this.datePipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss'),
      room_id: this.data.room_id,
      deposit: (30 / 100) * this.data.room_price,
      mem_reserdate: this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
    })

    this.shaerdService.saveMember(this.userShow.value).subscribe(
      (error) => console.log(error),
    );

    // send email
    const mockEmail = this.userShow.controls.email.value;
    this.mockListSubject.push('หมายเลขห้อง' + this.data.room_num)
    this.mockListSubject.push('ราคา' + this.data.room_price + ' บาท')
    const name = this.userShow.controls.first_name.value + ' ' + this.userShow.controls.last_name.value;
    this.sendEmail(mockEmail, this.mockListSubject, name);

    this.router.navigate(['/home']);
  }



  uploadImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileNameShow = file.name;
        console.log(this.fileNameShow);
        this.userShow.patchValue({
          mem_img: file.name
        });
        // for upload
        const formData = new FormData();
        formData.append('file', file);
        this.shaerdService.uploadImage(formData).subscribe(res => {
          alert('UploadFile :: ' + res);
        });

      };
    }
  }

  sendEmail(email: any, listSubject: any, name: any) {
    this.shaerdService.sendEmail(email, listSubject, name).subscribe(res => {
      console.log(res);
    })
  }

}
