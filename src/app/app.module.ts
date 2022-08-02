import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component'

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardService } from './auth/role-guard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    TitleComponent,
    FooterComponent,
    MyAccountComponent,
    AdminComponent,
    SidebarComponent,
    AdminHeaderComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [
    RoleGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
