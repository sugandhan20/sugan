import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { DelComponent } from './del/del.component';
import { PostComponent } from './post/post.component';
import { UpdComponent } from './upd/upd.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:"",component:ViewComponent},
  {path:"del/:id",component:DelComponent},
  {path:"post",component:PostComponent},
  {path:"upd/:id",component:UpdComponent},
  {path:"get/:id",component:GetComponent},
  {path:"backtohome",component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
