import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleId = 'my-id';
  titleColor = 'yellow';
  title = '처음 만드는 Angular';
  year = 2022;
}
