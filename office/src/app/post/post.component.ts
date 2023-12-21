import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeService } from '../office.service';
import { Officedetails } from '../officedetails';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
constructor(private OfficeService: OfficeService, private route: Router) { }
Office: Officedetails = new Officedetails();

formoffice=new FormGroup({
  id:new FormControl(),
  name:new FormControl("",[Validators.required , Validators.minLength(2)]),
  noofemployees:new FormControl('',[Validators.required]),
  location:new FormControl('',Validators.required),
  officetype:new FormControl("",Validators.required)
})
  
onSubmit() {
  const off=this.formoffice.value as Officedetails;
  this.OfficeService.add(off).subscribe((res) => {
  console.log(res);
  this.Office=res;
  this.route.navigate(['']);
  this.route.navigate(['']);
  },
  error=>console.log(error)
  );
  }
back() {
  this.route.navigate(['backpost']);
  }
  
get name(){
  return this.formoffice.get("name");
}
get noofemployees(){
  return this.formoffice.get("noofemployees")
}
get location(){
  return this.formoffice.get("location");
}
get officetype(){
  return this.formoffice.get("officetype")
}
}
