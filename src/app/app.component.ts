import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front_DDShop';

  constructor(
    private appService: AppService,
    private userService: UserService
  ) {
    let hello$ = userService.getUsers();

    hello$.subscribe({
      next: (data: any) => console.log(data),
      error: (err) => console.error(err),
    });
  }

  ngOnInit() {
    const val = this.appService.testMethod();
    console.log('Value : ', val);
  }
}
