import { Component, OnInit } from '@angular/core';
import { Log } from '../log';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  log = new Log("no tag", "no title");
  tags = [];
  logFormGroup: FormGroup;
  
  constructor() {
    //this.logFormGroup.controls.tags.patchValue(this.tags[0]);
  }

  ngOnInit() {
    this.logFormGroup  = new FormGroup({
      'title': new FormControl(null),
      'tag': new FormControl(null)
    });
    this.tags = this.getTags();
  }

  submit() {
    console.log("submit is called:", this.logFormGroup.value);
    
  }

  getTags(){
    return ['music', 'eds', 'java', 'dp'];
  }

}




