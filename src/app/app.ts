import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  result = 0;

  add(a: string, b: string): void {
    this.result = Number(a) + Number(b);
  }

  subtract(a: string, b: string): void {
    this.result = Number(a) - Number(b);
  }

  multiply(a: string, b: string): void {
    this.result = Number(a) * Number(b);
  }

  divide(a: string, b: string): void {
    const numA = Number(a);
    const numB = Number(b);

    if (numB === 0) {
      alert("Cannot divide by zero!");
      this.result = 0;
    } else {
      this.result = numA / numB;
    }
  }
}