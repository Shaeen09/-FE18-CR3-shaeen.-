import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap , Params} from '@angular/router';
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
menu:IMenu={} as IMenu;
id:number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(orderedItem: any) {
    this.cartService.addToCart(orderedItem);
    this.itemCount = this.cartService.getItems().length;
    this.message =  orderedItem.name + ' has been added to the cart!';
  }
  itemName: string = '';
  currentItem: IMenu[] | undefined;

  ngOnInit() {
this.route.params.subscribe((params: Params) =>{
  this.id = +params['id'];
  this.menu = menu[this.id];
});

  }
}
