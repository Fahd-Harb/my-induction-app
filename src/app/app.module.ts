import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { MyColorChangerDirective } from './my-color-changer.directive';
import { MyCustomThemeDirective } from './my-custom-theme.directive';
import { MyDynamicColorChangerDirective } from './my-dynamic-color-changer.directive';
import { MyCustomLoopDirective } from './my-custom-loop.directive';
import { MyIfDirective } from './my-if.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomInputComponent,
    MyColorChangerDirective,
    MyCustomThemeDirective,
    MyDynamicColorChangerDirective,
    MyCustomLoopDirective,
    MyIfDirective
],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
