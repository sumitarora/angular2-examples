import { Component } from '@angular/core';

@Component({
  template: `<p>Hello World</p>
    <datetime [datepicker]="false"></datetime>
  `
})
export class RioHelloPageComponent {
   date3: Date;
}
