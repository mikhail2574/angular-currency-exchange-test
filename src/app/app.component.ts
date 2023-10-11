import { Component } from '@angular/core';
import { ApiService } from './data/currency';
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

    // constructor(private apiService: ApiService) {
    // this.getCurrencies();
    // }
  
// getCurrencies() {
//   this.apiService.getCurrency().subscribe({
//     next: (data) => {
//       this.fetchedData = data;
//       this.usd = parseFloat((1 / this.fetchedData.data.USD.value).toFixed(2));
//       this.euro = parseFloat((1 / this.fetchedData.data.EUR.value).toFixed(2));
//       this.cad = parseFloat((1 / this.fetchedData.data.CAD.value).toFixed(2));
//     },
//     error: (error) => {
//       console.error('Error fetching currency:', error);
//     }
//   });
// }


}
