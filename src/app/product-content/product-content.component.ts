import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  
  products: Product[] = [];
  canClick = false;
  textData: string = '안녕';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const products: Product[] = this.productService.getProductsFromServer();
    this.products = products;
  }

}
