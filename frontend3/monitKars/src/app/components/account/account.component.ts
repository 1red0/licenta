import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import userData from '../../../dummyData/user.json'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  user: User = userData;

}
