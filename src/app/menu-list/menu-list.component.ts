import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { menu } from './menu';
import { CartService } from '../cart.service';
import { IMenu } from '../Imenu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  itemCount: number = 0;
  message: any;
  addToCart(orderedItem: any) {
    this.cartService.addToCart(orderedItem);
    this.itemCount = this.cartService.getItems().length;
    this.message =  orderedItem.name + ' has been added to the cart!';
  }
  menu: any[] = menu; // = {} as IMenus;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  ngOnInit(): void {
    this.menu = menu;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['menuId'];
    this.itemCount = this.cartService.getItems().length;
      //this.menu = masterMenu[this.id];
    });
  }
}
