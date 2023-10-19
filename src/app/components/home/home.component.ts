import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ProductDetails } from 'src/app/models/product-details';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: ProductDetails[] = [];
  carts: ProductDetails[] = [];

  existingProductDetails: ProductDetails[] = [];
  constructor(
    private homeService: HomeService,
    private router: Router,
    private storageService: StorageService,
    private cartService: CartService
  ) {
    //load products using HTTP
    this.homeService.getAllProducts().subscribe({
      next: (data: ProductDetails[]) => {
        //console.log(data);
        this.products = data;
        storageService.getExistingProducts(this.products);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('message', error.message);
      },
    });

    //this.existingProductDetails=this.homeService.getItems();
  }
  addCart(id: number) {
    if (this.storageService.isUserLogged()) {
      this.cartService.addToCart(id);
    } else {
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }
}
