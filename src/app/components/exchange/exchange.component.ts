import { Component, Input } from "@angular/core";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html"
})
    
export class exchangeComponent{
  @Input() usd: number = 1;
  @Input() euro: number = 1;
  @Input() cad: number = 1;
  firstValue: number = 0; // Left value
  secondValue: number = 0; // Right value
  firstCurrency: string = "UAH"; // Left currency
  secondCurrency: string = "UAH"; // Right currency

  get currencyValues(): { [key: string]: number } {
    return {
      UAH: 1,
      USD: this.usd || 1,
      EUR: this.euro || 1,
      CAD: this.cad || 1
    };
  }
  handleInput(evt: Event) {
    const inputElement = evt.target as HTMLInputElement;
    const identify = inputElement.getAttribute('name');
    let k; // multiply coefficient by currency
    if (identify === "value-1") {
      k = this.currencyValues[this.firstCurrency] / this.currencyValues[this.secondCurrency];
      this.secondValue = Number((this.firstValue * k).toFixed(2));
    } else {
      k = this.currencyValues[this.secondCurrency] / this.currencyValues[this.firstCurrency];
      this.firstValue = Number((this.firstValue * k).toFixed(2));
    }
  }

  handleChange(evt: Event) {
    let k;  // multiply coefficient by currency
    const firstCurrency = evt.target as HTMLSelectElement;
    if (firstCurrency.getAttribute("name") === "currency-1") {
      k = this.currencyValues[this.firstCurrency] / this.currencyValues[this.secondCurrency];
      this.secondValue = Number((this.firstValue * k).toFixed(2));
    }
    else {
      k = this.currencyValues[this.firstCurrency] / this.currencyValues[this.secondCurrency];
      this.secondValue = Number((this.firstValue * k).toFixed(2));
    }
  }
}