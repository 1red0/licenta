import { Component } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {

  Organisation: any;

  constructor(private organisationService:OrganisationService){}

  ngOnInit(){
    

    this.organisationService.getOrganisation(1).subscribe((res)=>{this.Organisation=res;})
  }
  
}
