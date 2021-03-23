import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
