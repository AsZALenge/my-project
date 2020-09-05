import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  dormList: Array<any>;
  DormTypeList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  statusType = '';
  formSearch: FormGroup;


  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDormList('0');

    this.formSearch = this.fb.group({
      dormName: ['', [Validators.required, Validators.minLength(4)]],
      priceStart: [0, [Validators.required]],
      priceEnd: [0, [Validators.required]],
      dormType: ['', [Validators.required]],
    });
  }

  getDormList(event) {
    console.log('LOG event >>:', event);

    this.statusType = event;
    console.log('LOGGGG 1  this.dormList::', this.dormList);
    if (event === '0') {
      this.shaerdService.getAllDorm().subscribe((data) => {
        console.log('LOGGGG 1 dormList', data);
        this.dormList = data;
        console.log('LOGGGG 222  this.dormList::', this.dormList);
      });
    } else {
      this.shaerdService.getDormByTypeId(event).subscribe((data) => {
        console.log('LOGGGG 2 LISTSHOP', data);
        this.DormTypeList = data;
      });
    }
  }

  onShow(data) {
    this.shaerdService.getDormBy_id(data.dorm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.router.navigate(['/home/showRoom', data.dorm_id]);
    });
  }

  onSearch() {
    if (this.formSearch.invalid) {
      return false;
    } else {
      var dormName = this.formSearch.controls.dormName.value;
      const priceStart = this.formSearch.controls.priceStart.value;
      const priceEnd = this.formSearch.controls.priceEnd.value;
      const dormType = this.formSearch.controls.dormType.value;
      this.shaerdService.searchDorm(dormName, priceStart, priceEnd, dormType).subscribe(res => {
        //for even0
        this.dormList = res;
        //for else
        this.DormTypeList = res;
      });
    }
  }

  resetForm() {
    this.formSearch.reset();
    this.shaerdService.getAllDorm().subscribe((data) => {
      //for even0
      this.dormList = data;
      //for else
      this.DormTypeList = data;
    });
  }

  // onClear(){
  //   this.shaerdService.getAllDorm().subscribe((data) => {
  //      //for even0
  //      this.dormList = data;
  //      //for else
  //      this.DormTypeList = data;
  //   });
  // }

  changeDormType(value: any) {
    console.log('changeDormType value : ' + value)
    this.formSearch.patchValue({
      dormType: value
    });
  }
}
