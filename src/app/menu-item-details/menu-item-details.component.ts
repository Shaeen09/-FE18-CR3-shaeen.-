import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { IMenu } from '../Imenu';
import { menu} from '../menu-list/menu';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent {
  itemCount: any = 0;
message: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(orderedItem: any) {
    this.cartService.addToCart(orderedItem);
    this.itemCount = this.cartService.getItems().length;
    this.message =  orderedItem.name + ' has been added to the cart!';
  }
  itemName: string = '';
  currentItem: IMenu[] | undefined;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemName = this.route.snapshot.params['name'];
      this.currentItem = menu.filter(m => m.name == this.itemName);
      this.itemCount = this.cartService.getItems().length;
    });
  }
}
