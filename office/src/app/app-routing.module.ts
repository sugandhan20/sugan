import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [ 
  {path:"list",component:ListComponent},
  {path:"",redirectTo:"list",pathMatch:'full'},
  {path:"post",component:PostComponent},
  {path:"back",component:ListComponent},
  {path:"get/:id",component:GetComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"backpost",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
