import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  User:any;
  
  constructor(private userService:UsersService){}

  ngOnInit(){
    

    this.userService.getUser(1).subscribe((res)=>{this.User=res;})
  }

}
