import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardService } from './auth/role-guard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminSubcategoriesComponent } from './admin-subcategories/admin-subcategories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminVariantComponent } from './admin-variant/admin-variant.component';
import { AdminProductAttributeComponent } from './admin-product-attribute/admin-product-attribute.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: AdminUserComponent },
  { path: 'category', component: AdminCategoriesComponent },
  { path: 'subcategory', component: AdminSubcategoriesComponent },
  { path: 'products', component: AdminProductsComponent },
  { path: 'variants', component: AdminVariantComponent },
  { path: 'attributes', component: AdminProductAttributeComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'normalUser',
    },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'admin',
    },
  },
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
