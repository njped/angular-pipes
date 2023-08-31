import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `
  <p>The hero's birthday is {{ birthday | date: 'medium' }}</p>
  <p>LOWERCASE ||| {{ lowerCasePipe | lowercase }}</p>
  <p>uppercase ||| {{ upperCasePipe | uppercase }}</p>
  <p>{{ INRPipeConvert | currency: 'INR' }}</p>
  <p>{{ EURPipeConvert | currency: 'EUR' }}</p>
  <p>{{ USDPipeConvert | currency: 'USD' }}</p>
  <p>{{ YENPipeConvert | currency: 'JPY' }}</p>
  <p>
  Super Hero Power: {{ power | exponentialStrength: factor }}
  </p>
  <p>Orginal Word: {{ word }}</p>
  <span>Reversed Word: {{ word | reverseString }}</span>
  `
})
export class HeroBirthdayComponent implements OnInit {

  constructor() {}

  birthday = new Date(1988, 3, 15); // April 15, 1988; Month is an array index

  lowerCasePipe = 'LOWERCASE';
  upperCasePipe = 'uppercase';
  INRPipeConvert = 1234.56;
  EURPipeConvert = 1234.56;
  USDPipeConvert = 1234.56;
  YENPipeConvert = 1234;
  power = 2
  factor = '5'
  word = 'Hello World'

  ngOnInit(): void {
    
  }
}