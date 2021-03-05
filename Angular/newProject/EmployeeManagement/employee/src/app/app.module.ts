import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateExpressionComponent } from './template-expression/template-expression.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    TwoWayBindingComponent,
    TemplateExpressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // HttpClient,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
