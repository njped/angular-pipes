import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [	
    AppComponent,
    HeroBirthdayComponent,
    ExponentialStrengthPipe,
    ReverseStringPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
