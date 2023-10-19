import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ProductDetails } from '../models/product-details';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  static loadCredentials(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {}
  users: User[] = [
    { userId: 100, email: 'kv@gmail.com', password: 'kv' },
    { userId: 200, email: 'kutty@gmail.com', password: '123' },
  ];
  products: ProductDetails[] = [];

  //load existing user credentials
  loadUsers(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  setCart(cart: Cart[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Cart[] {
    let cart = JSON.parse(localStorage.getItem('cart') as string);
    if (cart === null) cart = [];
    return cart;
  }

  //set logged in user in a local storage
  setLoggedUser(user: User): void {
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
  }

  //remove user
  logout() {
    sessionStorage.removeItem('loggedUser');
  }

  //check whether the user is logged in
  isUserLogged(): boolean {
    return sessionStorage.getItem('loggedUser') !== null;
  }

  getUserId(): User[] {
    return JSON.parse(sessionStorage.getItem('loggedUser') as string);
  }

  // return user credentials to authentication
  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  //add new user credentials
  loadCredentials(signupForm: User): boolean {
    let sign = JSON.parse(localStorage.getItem('users') as string);
    sign.push({
      id: this.users.length + 1,
      email: signupForm.email,
      password: signupForm.password,
    });
    localStorage.setItem('users', JSON.stringify(sign));
    return true;
  }

  getExistingProducts(products: ProductDetails[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getProducts(): ProductDetails[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
}
