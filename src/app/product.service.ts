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

}
