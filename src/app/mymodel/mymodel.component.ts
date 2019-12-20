import { Component } from '@angular/core';

@Component({
  selector: 'app-mymodel',
  template: `
    <input [(ngModel)]="name"  #mod="ngModel" required>
    <input [(ngModel)]="size" (change)="writeValue()">

    <p>the value of the model's attr named name: {{ name }}</p>
  
    <button (click)="console.log('clic')"> Write it down</button>
    
    <button (click)="setValue()">Set value</button>
  `,
})
export class MymodelComponent {
  name: string = '';
  size:string = '';
  

  setValue() { this.name = 'Nancy'; }

  writeValue() { 
    console.log(this.size);
  }
}