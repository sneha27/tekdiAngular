import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CountryService{

    constructor(private _http : Http){}

    getCountries( ){
        return this._http.get('https://restcountries.eu/rest/v2/all');
    }
}