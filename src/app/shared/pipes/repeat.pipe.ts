import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {
  transform(input: string, times: number): string {
    if (times < 0) {
      times = 0;
    }

    if (input) {
      return input.repeat(times);
    } else {
      return '';
    }
  }
}