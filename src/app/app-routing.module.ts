import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrgAboutComponent } from './srg-about/srg-about.component';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: SrgAboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
