import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder , private http : HttpClient , private router : Router ){

  }
  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:[''],
        password:['']
      })
  }
  login(){
    this.http.get<any>("http://localhost:3000/student").
    subscribe(res=>{
     const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password
      === this.loginForm.value.password
     });
     if(user){
      alert("login Success !!");
      this.loginForm.reset();
      this.router.navigate(['add'])
     }else {
      alert("login not found !! ")
     }
    },err=>{
      alert("something went wrong !! ")
    })
  }
}
