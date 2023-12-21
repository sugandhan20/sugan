import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {


  constructor(private service:StudentService, private route:Router){}
  student:Student=new Student();

  onSubmit(){
this.service.post(this.student).subscribe((response)=>{
this.student=response;
console.log(response);
this.route.navigate(['']);
})
  }
  backtohome(){
    this.route.navigate(['backtohome'])
  } 
  

}

