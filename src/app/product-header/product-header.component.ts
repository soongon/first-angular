import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent {

  @Input() titleId: string = '';
  @Input() titleColor: string = '';
  @Input() title: string = '';

  
}
