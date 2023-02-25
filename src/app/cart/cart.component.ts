import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IMenu } from '../Imenu';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: IMenu[] = [];
  totalAmount : number = 0;
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });
itemCount: any;
  constructor(private cartService: CartService, private fb: FormBuilder) { }
  clearCart() {
    window.alert('Your order has been cleared');
    this.items=this.cartService.clearCart();
    this.totalAmount = 0;
  }
  onSubmit() {
    console.warn('Your order has been submitted',
      this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach(i => this.totalAmount  += i.price);
    console.log('cart loaded ' + this.items.length + ' Price ' + this.totalAmount);
    this.itemCount = this.cartService.getItemsCountFromCart();
  }
  removeItem(removedItem: IMenu) {
    this.totalAmount = 0;
    this.items = this.cartService.removeItem(removedItem);
    this.items.forEach(i => this.totalAmount  += i.price);
    window.alert('All ' + removedItem.name + ' will be removed from the cart!!!');
    this.itemCount = this.cartService.getItemsCountFromCart();
  }

}
