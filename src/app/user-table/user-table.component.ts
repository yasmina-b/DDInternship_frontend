import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

@Component({
  selector: 'app-user-table',
  styleUrls: ['user-table.component.css'],
  templateUrl: 'user-table.component.html',
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'delete',
  ];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<UserData>;
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((userData) => {
      for (let index = 0; index < userData.length; index++) {
        this.ELEMENT_DATA.push({
          id: userData[index].id,
          firstName: userData[index].firstName,
          lastName: userData[index].lastName,
          email: userData[index].email,
          phoneNumber: userData[index].phoneNumber,
          role: userData[index].role,
        });
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getUser() {
    this.userService.getUsers().subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  public deleteUserById(id: number) {
    let resp = this.userService.deleteUser(id);
    resp.subscribe((data) => {
      this.users = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getUser();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
