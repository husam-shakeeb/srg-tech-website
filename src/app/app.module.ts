import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SrgNavbarComponent } from './srg-navbar/srg-navbar.component';
import { SrgAboutComponent } from './srg-about/srg-about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { BottomComponent } from './bottom/bottom.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SrgNavbarComponent,
    SrgAboutComponent,
    CarouselComponent,
    HomeComponent,
    TechnologiesComponent,
    CatalogComponent,
    ContactComponent,
    BottomComponent,
    ImpressumComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
