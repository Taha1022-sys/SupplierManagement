import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

response : any
  constructor(private http:HttpClient) {
  
  }
  
  ngOnInit() {
    debugger
   this.getallsuplierlist();
  }
  getallsuplierlist()
  {
    this.http.get<any>('https://localhost:7046/getAllSupplierList').subscribe(data => {
      debugger
        this.response = data;
    })        
  }
  detail_Click(supplierId:any)
  {debugger;
    window.open('http://localhost:4200/supplier-detail/'+supplierId+'', "_blank");
debugger;
  }
  
  }
  
