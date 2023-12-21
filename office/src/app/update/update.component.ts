import { Component, OnInit } from '@angular/core';
import { Officedetails } from '../officedetails';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from '../office.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private OfficeService: OfficeService, private route: Router,private act:ActivatedRoute ) { }
  Office: Officedetails = new Officedetails();
  id: number;
  formoffice1=new FormGroup({
    id:new FormControl(),
    name:new FormControl("",[Validators.required , Validators.minLength(2)]),
    noofemployees:new FormControl('',[Validators.required]),
    location:new FormControl('',Validators.required),
    officetype:new FormControl("",Validators.required)
  })

  getbyid() {
    this.OfficeService.get(this.id).subscribe((res) => {
      console.log(res);
      this.Office = res;
      this.formoffice1.patchValue(res);
    });
  }
  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    console.log(this.id);
    this.getbyid();
  }
  onSubmit() {
    const off=this.formoffice1.value as Officedetails;
    this.OfficeService.update(this.id,off).subscribe((ress) => {
      console.log(ress);
      this.Office=ress;
      this.route.navigate(['']);

    },
    error=>console.log(error)
    );
  }
  
  back() {
    this.route.navigate(['back']);
  }
  get name(){
    return this.formoffice1.get("name");
  }
  get noofemployees(){
    return this.formoffice1.get("noofemployees")
  }
  get location(){
    return this.formoffice1.get("location");
  }
  get officetype(){
    return this.formoffice1.get("officetype")
  }
}

