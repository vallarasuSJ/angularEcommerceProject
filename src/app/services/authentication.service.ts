import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';
import { Route, Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private storageService: StorageService, private router: Router) {}

  //validate user login
  isValidCredentials(user: User): boolean {
    let existingUser = this.storageService.getAllUsers();
    let isUser: boolean = false;
    for (let u of existingUser) {
      if (u.email === user.email && u.password === user.password) { 
        this.storageService.setLoggedUser(u);
        isUser = true;
        break;
      }
    }
    return isUser;
  }    

  //logout user
  isUserLoggedIn():boolean{
    return this.storageService.isUserLogged();
  }
  logoutUser(){
    this.storageService.logout();  
    this.router.navigate(['login'],{replaceUrl:true});
  }





}
