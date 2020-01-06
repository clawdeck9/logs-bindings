import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  // log = new Log("no tag", "no title");
  tags = [];
  filteredTags = [];
  logFormGroup: FormGroup;
  tagbeg: string;
  
  constructor() {
    //this.logFormGroup.controls.tags.patchValue(this.tags[0]);
  }
//, [Validators.required, this.notInTagList.bind(this)]
  ngOnInit() {
    this.logFormGroup  = new FormGroup({
      'title': new FormControl('notitle', Validators.required),
      'tagbeg': new FormControl(null, [Validators.required, this.notInTagList.bind(this)]),
      'tag': new FormControl(null)
    });
    this.tags = this.getNewTags();
    this.filteredTags = this.getNewTags();
    this.logFormGroup.get("tagbeg").valueChanges.subscribe( value => {
      // filter the tag list
      this.filteredTags = this.tags.filter(tag => tag.startsWith(value));
      // empty the select of the former selected value
      console.log("tagbeg changes: value of tagbeg : ", value);
      console.log("filteredTags : ", this.filteredTags);
    });
    this.logFormGroup.get("tag").valueChanges.subscribe(value => {
      // update the tagbed input with this value

      console.log("value of tag select : ", value);

      console.log("tag select changes: value of tagbeg : ", this.tagbeg);
      this.logFormGroup.patchValue({'tagbeg': value});
      

      console.log("value of tagbeg : ", this.tagbeg);
    });
  }

  // validate the tag by checking whether it's a new one
  notInTagList(control: FormControl): {[s: string]: boolean}{
    if(this.tags.indexOf(control.value) == -1) {
      return {'notATag': true};
    }
    return null;
  }



  submit() {
    console.log("submit is called:", this.logFormGroup);
    
  }

  getNewTags(){
    return ['music', 'eds', 'java', 'dp', 'js', 'jojo', 'jog'];
  }

}




