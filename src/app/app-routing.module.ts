import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrgAboutComponent } from './srg-about/srg-about.component';

const routes: Routes = [
  { path: 'about', component: SrgAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
