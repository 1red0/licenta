import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = "";
  searchResults: any[] = [];

  constructor(private searchService: SearchService) { }

  search(): void {
    this.searchService.search(this.searchTerm).subscribe(results => this.searchResults = results);
  }
}
