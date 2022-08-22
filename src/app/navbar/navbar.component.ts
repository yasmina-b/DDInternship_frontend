import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public classRef = NavbarComponent;

  categories: any;

  constructor(private categoryService: CategoryService) {
    categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  static user: { email: string; role: string };

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    console.log('USER', user);
    NavbarComponent.user = user as any;
  }
}
