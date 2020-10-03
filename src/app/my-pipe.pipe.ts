import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulo'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, args: number): number {
    return value % args;
  }

}
