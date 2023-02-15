import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Organisation } from 'src/app/models/organisation.model';
import { User } from 'src/app/models/user.model';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{

  uForm = <FormGroup>{};

  constructor(private _router: Router, private userService: UsersService, private organisationService: OrganisationService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.uForm = this.formBuilder.group({
      driverUsername: [''],
      driverMail: [''],
      driverFirstN: [''],
      driverlastN: [''],
      driverPhone: [''],
      driverPass: [''],
    });
  }

  organisation = <Organisation>{};
  driver = <User>{};

  addDriver(){
    this.driver.userName = this.uForm.value.driverUsername;
    this.driver.role = "driver";
    this.driver.email = this.uForm.value.driverMail;
    this.driver.firstName = this.uForm.value.driverFirstN;
    this.driver.lastName = this.uForm.value.driverlastN;
    this.driver.phone = this.uForm.value.driverPhone;

    this.driver.password = this.uForm.value.driverPass;

    this.userService.postUser(this.driver).subscribe();

    window.location.reload(); 

    this._router.navigate(['drivers']).then(() => {
      window.location.reload();
    });

  }

}
