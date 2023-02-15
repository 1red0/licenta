import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Organisation } from 'src/app/models/organisation.model';
import { User } from 'src/app/models/user.model';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  rForm = <FormGroup>{};

  constructor(private _router: Router, private userService: UsersService, private organisationService: OrganisationService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      orgName: [''],
      orgAddress: [''],
      orgMail: [''],
      orgPhone: [''],

      adminUsername: [''],
      adminMail: [''],
      adminFirstN: [''],
      adminlastN: [''],
      adminPhone: [''],
      adminPass: [''],
    });
  }

  organisation = <Organisation>{};
  admin = <User>{};

  

  register(){

    this.organisation.organisationName = this.rForm.value.orgName;
    this.organisation.organisationAddress = this.rForm.value.orgAddress;
    this.organisation.organisationMail = this.rForm.value.orgMail;
    this.organisation.organisationPhone = this.rForm.value.orgPhone;
    

    this.admin.userName = this.rForm.value.adminUsername;
    this.admin.role = "admin";
    this.admin.email = this.rForm.value.adminMail;
    this.admin.firstName = this.rForm.value.adminFirstN;
    this.admin.lastName = this.rForm.value.adminlastN;
    this.admin.phone = this.rForm.value.adminPhone;

    this.admin.organisationName = this.rForm.value.orgName;

    this.admin.password = this.rForm.value.adminPass;
    

    this.organisationService.postOrganisation(this.organisation).subscribe();
    this.userService.postUser(this.admin).subscribe();

    window.location.reload();

    this._router.navigate(['login']).then(() => {
      window.location.reload();
    });
    
  }

}
