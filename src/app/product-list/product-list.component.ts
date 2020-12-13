import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=[]
  httpCilent:HttpClient
  constructor(
    httpClient:HttpClient) { 
      this.httpCilent=httpClient
    }
  loadProducts(){
    const url = "http://localhost:3000/product"
    const request= this.httpCilent.get(url)
    request.subscribe(response=>{
      console.log(`response`)
      console.log(response)
      if(response['status']=='success'){
        this.products=response['data']
      }
    })
  }
  ngOnInit(): void {
  }

}
