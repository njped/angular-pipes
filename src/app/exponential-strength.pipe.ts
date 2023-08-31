import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})

export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    console.log('Exponent: ' + exp);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }


}
