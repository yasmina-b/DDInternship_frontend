import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  @Input()
    counterValue = 0;
  
  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
  

}
