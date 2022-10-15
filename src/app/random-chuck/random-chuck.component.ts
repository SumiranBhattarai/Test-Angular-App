import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-chuck',
  templateUrl: './random-chuck.component.html',
  styleUrls: ['./random-chuck.component.css']
})
export class RandomChuckComponent implements OnInit {
  randomJokeObj: string = "";
  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }
  getRandomJoke = () => {
    //this.randomJokeObj = this.https.get("https://api.chucknorris.io/jokes/random").subscribe(data: any) => this.randomJokeObj;
    this.https.get("https://api.chucknorris.io/jokes/random").subscribe((data: any) => this.randomJokeObj = data.value)
  }
}
