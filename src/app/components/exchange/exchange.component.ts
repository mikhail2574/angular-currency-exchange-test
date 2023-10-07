import { Component, Input } from "@angular/core";
import { first } from "rxjs";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html"
})
    
export class exchangeComponent{
  @Input() usd: number = 1;
  @Input() euro: number = 1;
  @Input() cad: number = 1;

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
    const firstValue = Number(inputElement.value);
    
    if (identify === "value-1") {
      const firstCurrency = document.getElementById("currency-1") as HTMLSelectElement;
      const resCurrency = document.getElementById("currency-2") as HTMLSelectElement;
      const resElement = document.querySelector('[name="value-2"]') as HTMLInputElement;

      const k = this.currencyValues[firstCurrency.value] / this.currencyValues[resCurrency.value];
        
      resElement.value = ((firstValue * k).toFixed(2)).toString();
    } else {
      const firstCurrency = document.getElementById("currency-2") as HTMLSelectElement;
      const resCurrency = document.getElementById("currency-1") as HTMLSelectElement;
      const resElement = document.querySelector('[name="value-1"]') as HTMLInputElement;

      const k = this.currencyValues[firstCurrency.value] / this.currencyValues[resCurrency.value];
        
      resElement.value = ((firstValue * k).toFixed(1)).toString();
    }
  }

  handleChange(evt: Event) {
    const firstCurrency = evt.target as HTMLSelectElement;
    if (firstCurrency.getAttribute("name") === "currency-1") {
      const firstElement = document.querySelector('[name="value-1"]') as HTMLInputElement;
      const firstValue = Number(firstElement.value);
      const resElement = document.querySelector('[name="value-2"]') as HTMLInputElement;
      const resCurrency = document.getElementById("currency-2") as HTMLSelectElement;
      const k = this.currencyValues[firstCurrency.value] / this.currencyValues[resCurrency.value];

      resElement.value = ((firstValue * k).toFixed(1)).toString();
    }
    else {
      const firstElement = document.querySelector('[name="value-1"]') as HTMLInputElement;
      const firstValue = Number(firstElement.value);
      const resElement = document.querySelector('[name="value-2"]') as HTMLInputElement;
      const resCurrency = document.getElementById("currency-1") as HTMLSelectElement;
      const k = this.currencyValues[resCurrency.value] / this.currencyValues[firstCurrency.value];
      resElement.value = ((firstValue * k).toFixed(1)).toString();
    }
  }
}