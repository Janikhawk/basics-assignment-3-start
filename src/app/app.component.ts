import { Component } from '@angular/core';

interface LocalData {
  text: string;
  date: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true;
  logArr: LocalData[] = [];
  buttonClicked = 0;

  someAction() {
    this.show = !this.show;
    this.buttonClicked++;
    const date = Date.now();
    this.logArr.push({text: `${this.buttonClicked} button click at`, date: Date.now() });
  }
}
