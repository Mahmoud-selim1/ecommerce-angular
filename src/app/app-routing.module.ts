import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ProductsComponent } from './main/products/products.component';
import { BrandComponent } from './main/brand/brand.component';
import { SubCategoriesComponent } from './main/sub-categories/sub-categories.component';
import { CategoryComponent } from './main/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'sub', component: SubCategoriesComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
