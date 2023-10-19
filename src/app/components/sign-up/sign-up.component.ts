import { Component } from '@angular/core'; 
import { NgForm } from '@angular/forms'; 
import { StorageService } from 'src/app/services/storage.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {    
  constructor(private storageService:StorageService,private router:Router){}

  onSubmit(signupForm:NgForm){
    if(this.storageService.loadCredentials(signupForm.value)){
      this.router.navigate(['login'],{replaceUrl:true});
    }
    
  } 


}
