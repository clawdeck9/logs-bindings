import { Component, OnInit } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  log = new Log("no tag", "no title");
  tags = ["music", "java", "dp", "eds"];

  constructor() { }

  ngOnInit() {
    // retrieve the tags with the restservice
  }

}
