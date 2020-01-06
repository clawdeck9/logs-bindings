import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      // 'tagbeg': new FormControl(null, Validators.required, this.notInTagListAsync.bind(this)),
  ngOnInit() {
    this.logFormGroup  = new FormGroup({
      'title': new FormControl('notitle', Validators.required),
      'tagbeg': new FormControl(null, Validators.required),
      'tag': new FormControl(null)
    });
    this.tags = this.getNewTags();
    this.filteredTags = this.getNewTags();
    // this.logFormGroup.patchValue({'tagbeg': comment ajouter une prop ici});
    this.logFormGroup.get("tagbeg").valueChanges.subscribe( value => {
      // filter the tag list
      this.filteredTags = this.tags.filter(tag => tag.startsWith(value));
      // TODO: empty the select of the former selected value
      console.log("tagbeg valueChanges: errors  : ", this.logFormGroup.get("tagbeg").errors);
      console.log("tagbeg valueChanges: value : ", value);
      console.log("tagbeg valueChanges: filteredTags : ", this.filteredTags);
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
    return null; // errors must be null but it can raise an error if read by validators
  }

  // fetch some data from a distant service API, not working in that case, the timeout triggers a 'don't exist' error for 'required'
  notInTagListAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.tags.indexOf(control.value) == -1){
          resolve({'notATag': true});
        }
        resolve(null);
      }, 2000);
    });
    return promise;
  }



  submit() {
    console.log("submit was called:", this.logFormGroup);
    
  }

  getNewTags(){
    return ['music', 'eds', 'java', 'dp', 'js', 'jojo', 'run', 'sport', 'ia', 'cpp', 'juju', 'jar'];
  }

}




