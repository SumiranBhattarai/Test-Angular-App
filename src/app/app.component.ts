import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New Title';
  count = 0;
  /*increment = () => {
    this.count++;
  }*/
  listofNums = [1, 2, 3, 4, 5];
  listOfNames = ["Sumiran", "Shanskar", "Premjyoti", "N"];
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  num1 = 0;
  num2 = 0;
  res = 0;
  add() {
    this.res = Number(this.num1) + Number(this.num2);
  }
}
