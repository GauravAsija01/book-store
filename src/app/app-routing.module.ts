import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




 const routes: Routes = [

   //{ path: '', redirectTo: 'home', pathMatch: 'full'}
  //{ path: '', component: LayoutSharedComponent},
  //{ path: '**', component: NotFoundComponent }


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
