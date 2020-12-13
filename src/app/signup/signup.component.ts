import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName=''
  lastName=''
  email=''
  password=''
  httpClient : HttpClient 
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }
  onSignUp(){
    const body = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password      
    }
    const url =  "http://localhost:3001/user/signup"
    const request = this.httpClient.post(url, body)
    request.subscribe(response=>{
      console.log(response)
      if(response['status']=='success'){
        alert(`you have registered successfully`)
      }else{
        alert('you have not registered successfully')
      }
    })
  }
  onCancel(){

  }
  ngOnInit(): void {
  }

}
