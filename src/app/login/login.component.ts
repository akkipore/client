import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=''
  password=''
  httpClient : HttpClient 
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }
  onLogin(){
    const body={
      email:this.email,
      password:this.password

    }
    const url ="http://localhost:3001/user/signin"
    const request = this.httpClient.post(url,body)
    request.subscribe(response=>{
      console.log(response)
      if(response['status']=='success'){
        const data = response['data']
        const firstName = data['firstName']
        const lastName = data['lastName']
        alert(`welcome ${firstName} ${lastName}`)
      }else{
        alert('invalid email or password')
      }

    })
  }
  onCancel(){

  }
  ngOnInit(): void {
  }

}
