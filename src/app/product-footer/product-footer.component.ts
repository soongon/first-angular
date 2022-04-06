import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-footer',
  templateUrl: './product-footer.component.html',
  styleUrls: ['./product-footer.component.css']
})
export class ProductFooterComponent implements OnInit {

  @Input() year: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
