import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/models/user.model';
import userData from '../../../dummyData/user.json'



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  User:any;
  Users:any;

  user: User = userData;

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((res)=>{this.Users=res;})
  }

}
