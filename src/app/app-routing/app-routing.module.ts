import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from '../feature/feature.component';
import { SummaryComponent } from '../summary/summary.component';
import { Component } from '@angular/core/src/metadata/directives';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ProductComponent } from '../product/product.component';
import { BillingComponent } from '../billing/billing.component';

const routes: Routes = [
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: 'feature', loadChildren: '../feature/feature.module#FeatureModule' },
  { path: 'summary', component: SummaryComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [DetailsComponent]
})
export class AppRoutingModule {

}
