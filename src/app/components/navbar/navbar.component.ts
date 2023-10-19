import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) {}

  logoutHandler() {
    this.authenticationService.logoutUser();
  }

  getCount(): number {
    return this.cartService.getCartCount();
  }
}
