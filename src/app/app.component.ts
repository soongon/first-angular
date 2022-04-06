import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titleId = '';
  titleColor = '';
  title = '';
  year = 0;

  constructor(private productService: ProductService) {}

  // 컴포넌트가 최초로 메모리에 로딩될 때(init) 콜백 되는 함수
  // 데이터를 가져오는 작업..
  ngOnInit(): void {
      console.log('app 컴포넌트 메모리 로딩..됨');
      // DataService service = new DataService();
      const data = this.productService.getDataFromServer();
      this.titleId = data.titleId;
      this.titleColor = data.titleColor;
      this.title = data.title;
      this.year = data.year;
  }
}
