import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { UserService } from './services/user.service';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { CategoryService } from './services/category.service';
import { AdminSubcategoriesComponent } from './admin-subcategories/admin-subcategories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserTableComponent } from './user-table/user-table.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SubcategoryTableComponent } from './subcategory-table/subcategory-table.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { VariantTableComponent } from './variant-table/variant-table.component';
import { AdminVariantComponent } from './admin-variant/admin-variant.component';
import { AdminProductAttributeComponent } from './admin-product-attribute/admin-product-attribute.component';
import { ProductAttributeTableComponent } from './product-attribute-table/product-attribute-table.component';
import { AddVariantComponent } from './add-variant/add-variant.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAttributeComponent } from './add-attribute/add-attribute.component';
import { AddAttributeValueComponent } from './add-attribute-value/add-attribute-value.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    TitleComponent,
    FooterComponent,
    MyAccountComponent,
    AdminComponent,
    SidebarComponent,
    AdminUserComponent,
    AdminCategoriesComponent,
    AdminSubcategoriesComponent,
    AdminProductsComponent,
    ProductTableComponent,
    UserTableComponent,
    CategoryTableComponent,
    AddCategoryComponent,
    SubcategoryTableComponent,
    AddSubcategoryComponent,
    AddProductComponent,
    VariantTableComponent,
    AdminVariantComponent,
    AdminProductAttributeComponent,
    ProductAttributeTableComponent,
    AddVariantComponent,
    AddAttributeComponent,
    AddAttributeValueComponent,
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
    MatListModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    DialogModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [RoleGuardService, UserService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
