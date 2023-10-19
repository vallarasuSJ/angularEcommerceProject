import { Injectable, OnInit } from '@angular/core';
import { ProductDetails } from '../models/product-details';
import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalPrice: number = 0;
  constructor(private storageService: StorageService) {}

  addToCart(id: number) {
    let carts: Cart[] | undefined = this.storageService.getCart();

    let products: ProductDetails[] = this.storageService.getProducts();
    let findProduct = products.find((c) => c.id === id);
    //console.log(findProduct);

    let userId: User = JSON.parse(
      sessionStorage.getItem('loggedUser') as string
    );
    //  console.log(userId.userId);
    if (findProduct) {
      // console.log(1)
      let findCart: Cart | undefined = carts?.find(
        (c) => c.prodId === id && c.userId?.userId === userId.userId
      );
      console.log(findCart);
      if (findCart && carts) {
        for (let i of carts) {
          if (findCart.id === i.id && i.userId?.userId === userId.userId) {
            i.total = i.count! * i.price!;
            i.count = i.count! + 1;
          }
        }
      } else {
        carts?.push({
          userId: userId,
          count: 1,
          total: findProduct.price,
          prodId: findProduct.id,
          ...findProduct,
        });
      }
    }

    this.storageService.setCart(carts);
  }

  getTotalPrice(): number {
    let carts: Cart[] | undefined = this.storageService.getCart();
    for (let i of carts!) {
      this.totalPrice += i.total!;
    }
    return this.totalPrice;
  }

  getCartCount(): number {
    let count: number = 0;
    let userId = JSON.parse(sessionStorage.getItem('loggedUser') as string);
    let carts: Cart[] | undefined = this.storageService.getCart();
    for (let i of carts!) {
      if (i.userId?.userId === userId.userId) {
        count = count + i.count!;
      }
    }

    // console.log(count);
    return count;
  }

  //checkout
  checkout(): void {
    let cart = this.storageService.getCart();
    let userId = JSON.parse(sessionStorage.getItem('loggedUser')!);
    cart = cart.filter((c: any) => c.userId.userId !== userId.userId);
    this.storageService.setCart(cart);
  }
}
