import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.css']
})
export class ContentTitleComponent implements OnInit {
  
  @Input() canClick = false;
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log('button clicked..');
  }

}
