import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  User:any;

  idAcc:any = this.route.snapshot.paramMap.get('userID')
  
  constructor(private userService:UsersService, private route: ActivatedRoute){}

  ngOnInit(){
    
    this.userService.getUser(this.idAcc).subscribe((res)=>{this.User=res;})
  }

}
