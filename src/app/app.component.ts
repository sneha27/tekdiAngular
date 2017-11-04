import { Component } from '@angular/core'; 
import { CountryService } from "./country.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CountryService]
})
export class AppComponent {
  title = 'app';
  countryData;
  countryHeaders;

  constructor (private _countryService : CountryService){

    this.countryHeaders = [
                              {label : "Name", identifier : ['name']},
                              {label : "Capital", identifier : ['capital']},
                              {label : "Region", identifier : ['region']}
                          ];

    this._countryService.getCountries().subscribe(data => 
                                            {
                                              this.countryData = data.json();
                                            });
  }


}
