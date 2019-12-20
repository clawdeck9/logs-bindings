import { Component, OnInit } from '@angular/core';
// import ngModel from '@angular/core';
import { timeout } from 'q';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  name = "Claw";
  in = "entrée";
  inputValue = "my name";
  disableBool:boolean = false;

  ngOnInit(){
    // this.later();
  }
  onClick(){
    console.log("clicage du bouton et update de Disabled");
    this.disableBool=true;
  }
  later(){
    setTimeout(() => {
      console.log("time");
      this.disableBool = true;
    }, 5000);
  }
}
