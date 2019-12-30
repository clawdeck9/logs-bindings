import { Component, OnInit } from '@angular/core';
import { Log } from '../log';
import { FormGroup, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  log = new Log("no tag", "no title");
  tags = [];
  filteredTags = [];
  logFormGroup: FormGroup;
  tagbeg: string;
  
  constructor() {
    //this.logFormGroup.controls.tags.patchValue(this.tags[0]);
  }

  ngOnInit() {
    this.logFormGroup  = new FormGroup({
      'title': new FormControl('notitle'),
      'tagbeg': new FormControl(null),
      'tag': new FormControl(null)
    });
    this.tags = this.getNewTags();
    this.filteredTags = this.getNewTags();
    this.logFormGroup.valueChanges.subscribe( value => {
      // filter the tag list
      this.filteredTags = this.tags.filter(tag => tag.startsWith(value.tagbeg));
      console.log("value of tagbeg : ", value.tagbeg);
      console.log("filteredTags : ", this.filteredTags);
      
    });
  }
// mettre ici une fonction qui prend en compte les changements de valeur
// dans le control tagbeg et filtre la liste de tags en focntion
  onChangeBeg(value: string){
    this.tags.push(this.tagbeg);
    console.log(value, this.tagbeg, this.tags);
  }
  submit() {
    console.log("submit is called:", this.logFormGroup.value);
    this.log.title = this.logFormGroup.value.title;
    
  }

  getNewTags(){
    return ['music', 'eds', 'java', 'dp', 'js', 'jojo', 'jog'];
  }

}




