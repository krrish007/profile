import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
import { RouterModule } from '@angular/router/src/router_module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductService } from '../app/product.service';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirectiveDirective,
    SummaryComponent,
    MainHeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    ProductComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
