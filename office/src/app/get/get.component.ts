import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Officedetails } from '../officedetails';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit{

  constructor(private OfficeService:OfficeService,private act:ActivatedRoute,private route:Router){}
  id:number;
    Office:Officedetails=new Officedetails();
  
    ngOnInit(): void {
  this.id=this.act.snapshot.params['id'];
  console.log(this.id);
  this.getbyid();
    }
  getbyid(){
    this.OfficeService.get(this.id).subscribe((res)=>{
      console.log(res);
      this.Office=res;    
    });
  }
  backtolist() {
    this.route.navigate(['back']);
  
  }
}
