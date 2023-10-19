import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.storageService.loadUsers(); 
  } 

  isLogin():boolean{
    return this.storageService.isUserLogged();
  }

  title = 'angularEcommerceProject';
}
