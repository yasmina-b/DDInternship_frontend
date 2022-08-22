import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {
    console.log('this is app Service Constructor!!');
  }

  testMethod(): string {
    return `returning string`;
  }
}
