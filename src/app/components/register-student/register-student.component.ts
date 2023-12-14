import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit{
  public signupForm !: FormGroup;
constructor(private formBuilder:FormBuilder , private http: HttpClient , private router : Router ){

}
ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
}
signUp(){
  this.http.post<any>("http://localhost:3000/student",this.signupForm.value).subscribe(res=>{
    alert("signup Succefully");
    this.signupForm.reset();
    this.router.navigate(['login']);
  }, err=>{
    alert("Something went wrong ");
  })
}
}
