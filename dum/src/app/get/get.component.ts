import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { response } from 'express';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  constructor(private service:StudentService, private route:Router,private act:ActivatedRoute){}
student:Student=new Student();
id:string;

  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
    console.log(this.id);
    this.getbyid();
  }
  getbyid(){
    this.service.getbyid(this.id).subscribe((response)=>{
this.student=response;
console.log(response);

    })
  }


}
