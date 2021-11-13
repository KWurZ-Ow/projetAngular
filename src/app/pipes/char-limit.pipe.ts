import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharLimitPipe implements PipeTransform {

  transform(value: string): string {
    if (!value){
      return ''
    }
    let rez = value.slice(0, 110)
    rez += "..."
    return rez;
  }

}
