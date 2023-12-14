import { Component, OnInit } from '@angular/core';
import{FormGroup , FormControl} from '@angular/forms';
import {StudentsService} from '../../students.service'
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private student:StudentsService , private router:ActivatedRoute){};
  editStudent=new FormGroup({

    firstname :new FormControl(''),
    lastname :new FormControl(''),
    email :new FormControl(''),
    phone :new FormControl(''),
    department :new FormControl(''),
  });
    message:boolean=false;
    ngOnInit(): void {
      const params = this.router.snapshot.params as { id: string };
      const studentId: number = +params.id; // Convert the id to a number
  
      this.student.getStudentById(studentId).subscribe((result: any) => {
     //   console.log(result);
        this. editStudent=new FormGroup({

          firstname :new FormControl(result['firstname']),
          lastname :new FormControl(result['lastname']),
          email :new FormControl(result['email']),
          phone :new FormControl(result['phone']),
          department :new FormControl(result['department']),
        });
      });
    }
    UpdateData() {
      const params = this.router.snapshot.params as { id: string };
      const studentId: number = +params.id; // Convert the id to a number
      //console.log(this.editStudent.value);
    
      this.student.updateStudentData(studentId, this.editStudent.value).subscribe((result)=>{
      //  console.log(result);
      this.message=true;
      });
    }
    removeMessage(){
      this.message=false;
    }
    }

