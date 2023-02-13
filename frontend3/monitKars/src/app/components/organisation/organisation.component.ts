import { Component } from '@angular/core';
import { Organisation } from 'src/app/models/organisation.model';
import organistaionData from '../../../dummyData/organisation.json'

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {

  organisation: Organisation = organistaionData;
  
}
