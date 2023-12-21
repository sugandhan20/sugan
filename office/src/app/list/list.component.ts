import { Component, OnInit } from '@angular/core';
import { Officedetails } from '../officedetails';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

constructor(private Office:OfficeService, private route:Router){ }
Offices:Officedetails[]=[];
office:Officedetails = new Officedetails();

gotoupdate(id: number) {
  this.route.navigate(['update',id]);
}
gotoview(id:number) {
  this.route.navigate(['get',id]);
}
gotopostoff() {
  this.route.navigate(['post']);
}
ngOnInit(): void {
  this.getalldata().subscribe((response)=>{
  this.Offices=response;
  console.log(response);
})
  }
getalldata():Observable<Officedetails[]>{
  return  this.Office.getalloff();
}
deletebyid(id: number){
  this.Office.delete(id).subscribe((res)=>{
  console.log(res);
  this.route.navigate(['list']);
  })
}
}
