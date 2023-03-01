import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSpecialComponent } from './home-special/home-special.component';
import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
const routes: Routes = [{
  path:"", component: HomeComponent
},
{
path:"aboutUs", component:AboutUsComponent
},
{
  path:"menu/:id", component:MenuItemDetailsComponent
},
 {
  path:"menu", component: MenuListComponent
},
{
  path:"cart", component: CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
