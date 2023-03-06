import { Component } from '@angular/core';
import { Organisation } from 'src/app/models/organisation.model';
import { OrganisationService } from 'src/app/services/organisations/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {

  organisation = <Organisation>{};

  constructor(private organisationService:OrganisationService){}

  ngOnInit(){
    

    // this.organisationService.getOrganisation(1).subscribe((res)=>{this.organisation=res;})
  }
  
}
