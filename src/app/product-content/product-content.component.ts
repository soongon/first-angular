import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  
  products: string[] = ['아이폰13', '갤럭시22', '삼성 모니터', '에어컨', '세탁기'];
  canClick = false;

  constructor() { }

  ngOnInit(): void {
  }

}
