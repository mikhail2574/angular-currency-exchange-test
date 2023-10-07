import { Component, Input } from "@angular/core";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
    
export class headerComponent { 
  @Input() usd: number = 0;
  @Input() euro: number = 0;
  @Input() cad: number = 0;
};