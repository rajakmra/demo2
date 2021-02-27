import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, p1: number = 2): number {

    return value * p1;
    //return value;
    //return Math.pow(value,p1);
  }

}
