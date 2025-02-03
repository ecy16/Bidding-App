import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'product', component: ProductComponent }


];
