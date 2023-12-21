import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private service:StudentService, private route:Router){}
  
  student:Student[]=[];


    ngOnInit() {
      this.getall().subscribe((response)=>{
this.student=response;
console.log(response);
      });
    


  }
  getall():Observable<Student[]>{
    return this.service.getall();
  }

  gotopost(){
    this.route.navigate(['post']);
    
  }
  
  gotoget(id:string){
    this.route.navigate(['get',id]);
  }
gotoupd(id:string){
  this.route.navigate(['upd',id]);
}
gotodel(id:string){
  
  this.route.navigate(['del',id]);
}



}
