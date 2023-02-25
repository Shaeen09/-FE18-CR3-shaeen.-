import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeUsComponent } from './home-us/home-us.component';
import { HomeSpecialComponent } from './home-special/home-special.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    HomeIntroComponent,
    HomeUsComponent,
    HomeSpecialComponent,
    MenuListComponent,
    CartComponent,
    HomeComponent,
    AboutUsComponent,
    MenuItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
