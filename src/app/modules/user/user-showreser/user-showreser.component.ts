import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-showreser',
  templateUrl: './user-showreser.component.html',
  styleUrls: ['./user-showreser.component.css']
})
export class UserShowreserComponent implements OnInit {
  showreser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup()

    // patch value in response api to form 
    this.patchValueForm()

  }
  initFormGroup() {
    this.showreser = this.fb.group({
      mem_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      dorm_id: ['', [Validators.required]],
      room_id: ['', [Validators.required]],
      mem_reserdate: ['', [Validators.required]],
      mem_arrivaldate: ['', [Validators.required]],
      mem_departdate: ['', [Validators.required]],
      mem_add: ['', [Validators.required]],
      room_price: ['', [Validators.required]]
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    let memID = this.activatedroute.snapshot.paramMap.get("mem_id");
    console.log('patchValueForm : mem_id => ', memID);

    await this.shaerdService.getMemBy_id(memID).subscribe((res) => {
      console.log('patchValueForm : Response getMemBy_id => ', res);

      // patch value to form
      this.showreser.patchValue({
        mem_id: res.mem_id,
        user_id: res.user_id,
        dorm_id: res.dorm_id,
        room_id: res.room_id,
        mem_reserdate: res.mem_reserdate,
        mem_arrivaldate: res.mem_arrivaldate,
        mem_departdate: res.mem_departdate,
        mem_add: res.mem_add,
        room_price: res.room_price,
      });
      console.log('showreser => ', this.showreser.value);
    });
  }
  get form() { return this.showreser.controls; }

  // save
  submitForm() {
    // // case notfound in condition
    // if (this.showreser.invalid) {
    //   return false;

    // } else { // case success
    //   console.log(this.showreser.value);
    //   console.log('LOG DATA FN() ON invalid >>>showreser<<<::', this.showreser.value);

    //   this.shaerdService.updateRoom(this.showreser.value).subscribe((res) => {
    //     console.log('LOGGGG LISTSHOP', res);
        this.router.navigate(['/user/reserInformation']);
      // });
    // }
  }
}
