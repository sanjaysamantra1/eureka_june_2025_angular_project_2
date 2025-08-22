import { Component } from '@angular/core';

@Component({
  selector: 'app-unittesting-demo',
  imports: [],
  templateUrl: './unittesting-demo.html',
  styleUrl: './unittesting-demo.css'
})
export class UnittestingDemo {
  add(a: number, b: number) {
    return a + b;
  }
  
  cars = ['Tata', 'Honda'];
  addNewCar(carName: string) {
    this.cars.push(carName)
  }
}
