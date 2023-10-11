import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
providedIn:  'root'
})

export class ApiService {
    private url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_1r7meoXfcU6QR1bH8JlMEPIqoWRVeR89ixVDhWif&currencies=EUR%2CUSD%2CCAD&base_currency=UAH";
    constructor(private http: HttpClient) { };
    
    getCurrency() {
        return this.http.get(this.url);
    }
}