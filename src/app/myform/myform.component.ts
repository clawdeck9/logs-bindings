import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-myform',
  template: `
    <form #myform="ngForm" (ngSubmit)="onSubmit(myform)" novalidate>
      <input name="first" ngModel required #first="ngModel">
      <input name="last" ngModel>
      <button>Submit</button>
    </form>
    
    <p>First name value: {{ first.value }}</p>
    <p>First name valid: {{ first.valid }}</p>
    <p>Form value: {{ myform.value | json }}</p>
    <p>Form valid: {{ myform.valid }}</p>
  `,
})
export class MyformComponent {
  onSubmit(myform: NgForm) {
    console.log(myform.value);  // { first: '', last: '' }
    console.log(myform.valid);  // false
  }
}