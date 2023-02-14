import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Organisation } from 'src/app/models/organisation.model';
import { User } from 'src/app/models/user.model';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  rForm = new FormGroup({
    orgName: new FormControl<string>('',{nonNullable: true}),
    orgAddress: new FormControl<string>('',{nonNullable: true}),
    orgMail: new FormControl<string>('',{nonNullable: true}),
    orgPhone: new FormControl<string>('',{nonNullable: true}),

    adminUsername: new FormControl<string>('',{nonNullable: true}),
    adminMail: new FormControl<string>('',{nonNullable: true}),
    adminFirstN: new FormControl<string>('',{nonNullable: true}),
    adminlastN: new FormControl<string>('',{nonNullable: true}),
    adminPhone: new FormControl<string>('',{nonNullable: true}),
    adminPass: new FormControl<string>('',{nonNullable: true}),
  });

  organisation = <Organisation>{};
  admin = <User>{};

  constructor(private userService: UsersService, private organisationService: OrganisationService){}

  register(){
    this.organisation.name = this.rForm.value.orgName;
    this.organisation.address = this.rForm.value.orgAddress;
    this.organisation.email = this.rForm.value.orgMail;
    this.organisation.phone = this.rForm.value.orgPhone;
    this.organisationService.postOrganisation(this.organisation);

    this.admin.userName = this.rForm.value.adminUsername;
    this.admin.role = "admin";
    this.admin.email = this.rForm.value.adminMail;
    this.admin.firstName = this.rForm.value.adminFirstN;
    this.admin.lastName = this.rForm.value.adminlastN;
    this.admin.phone = this.rForm.value.adminPhone;

    this.admin.password = this.rForm.value.adminPass;
    
    this.userService.postUser(this.admin);
    
  }

}
