import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/models/product-details';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
})
export class CartsComponent {
  cart: Cart[] = [];
  finalTotal: number = 0;

  constructor(
    private cartService: CartService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.cart = storageService.getCart();

    for (let i of this.cart) {
      this.finalTotal = this.finalTotal + i.total!;
    }
  }

  checkout() {
    this.cartService.checkout();
    this.finalTotal = 0;
    this.router.navigate(['home']);
  }
}
