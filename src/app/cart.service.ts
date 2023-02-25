import { Injectable } from '@angular/core';
import {IMenu} from './Imenu';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IMenu[] = [];
  constructor() { }
  addToCart(menu: IMenu) {
    this.items.push(menu);
    console.log(menu.name);
  }
  getItems() : IMenu[] {
    return this.items;
  }
  getItemsCountFromCart() : number {
    return this.items.length;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  removeItem(menuItem: any){
    this.items = this.items.filter(item => item.name != menuItem.name);
    return this.items;
  }
}

