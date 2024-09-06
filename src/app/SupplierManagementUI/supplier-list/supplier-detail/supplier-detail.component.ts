import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),

  });
  supplierId: any;

  responsedetail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    {
      debugger;

      this.route.params.subscribe(params => {
        debugger;
        console.log(params) //log the entire params object
        this.supplierId = params['id']; //log the value of id
        this.http.get<any>('https://localhost:7046/GetSupplierById/' + this.supplierId + '').subscribe(data => {
          debugger
          this.responsedetail = data;
        })
      });


      debugger;
    }

  }
  save_click() {
    debugger;
    var form = this.form.value;
    var data = { "supplierId":this.supplierId , "name":form.name, "address":form.address }
    

    var url= 'https://localhost:7046/updateSupplier';

   
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
   this.http.post(url,data, options);
   this.http.post('https://localhost:7046/updateSupplier', data,options )
   .subscribe(response =>  window.open('http://localhost:4200/supplier-list', "_blank"));
}
delete_click()
{
  debugger;

  
}


}
