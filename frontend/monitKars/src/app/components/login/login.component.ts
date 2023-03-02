import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Organisation } from 'src/app/models/organisation.model';
import { User } from 'src/app/models/user.model';
import { AuthAdminService } from 'src/app/services/auth/auth-admin.service';
import { AuthDriverService } from 'src/app/services/auth/auth-driver.service';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  lForm = <FormGroup>{};

  constructor(private router: Router ,private orgService: OrganisationService, private userService: UsersService, private formBuilder: FormBuilder, private loggerADM: AuthAdminService,private loggerDRV: AuthDriverService){}

  ngOnInit() {
    this.lForm = this.formBuilder.group({
      orgName: [''],
      username: [''],
      pass: [''],
    });
  }

  login(){

    let user: User = <User>{};
    let organisation: Organisation = <Organisation>{}

    this.userService.getUsername(this.lForm.value.username).subscribe(_data => user = _data)
    this.orgService.getOrganisationName(this.lForm.value.orgName).subscribe(_data => organisation = _data)

    if((user.organisationName === organisation.organisationName) && (user.password === this.lForm.value.pass) && (user.role === "admin")){
      this.loggerADM.login();
      this.router.navigate(['/']);
    }else if((user.organisationName === organisation.organisationName) && (user.password === this.lForm.value.pass) && (user.role === "driver")){
      this.loggerDRV.login();
      this.router.navigate(['/']);
    }else{
      // this.router.navigate(['register']);
      console.log("NU");
      console.log(user.organisationName);
      console.log(organisation.organisationName);
    }
    
  }

}
