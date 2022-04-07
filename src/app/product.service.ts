import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getDataFromServer() {
    return {
      titleId: 'myId',
      titleColor: 'red',
      title: 'Angular 재밍ㅆ어요...',
      year: 2022,
    };
  }

  getProductsFromServer(): string[] {
    return ['아이폰', '갤럭시', '키보드', '마우스'];
  }

}
