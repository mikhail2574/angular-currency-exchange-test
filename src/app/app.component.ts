import { Component } from '@angular/core';
import fetchCurrency from './data/currency';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchedData: any;
  usd: number = 1;
  euro: number = 1;
  cad: number = 1;
  async getCurrencies() {
    try {
      this.fetchedData = await fetchCurrency();
      this.usd = parseFloat((1 / this.fetchedData.USD.value).toFixed(2));
      this.euro = parseFloat((1 / this.fetchedData.EUR.value).toFixed(2));
      this.cad = parseFloat((1 / this.fetchedData.CAD.value).toFixed(2));
    } catch (error) {
      console.error('Error fetching currency:', error);
    }
  }
  constructor() {
    this.getCurrencies();
  }

}
