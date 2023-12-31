import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { StringcustomdirectiveDirective } from './stringcustomdirective.directive';
import { ProfileComponent } from './profile/profile.component';
import { HoverDirectiveDirective } from './hover-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CustomDirectiveDirective,
    StringcustomdirectiveDirective,
    ProfileComponent,
    HoverDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
