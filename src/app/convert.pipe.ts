import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  // когда true (default) вызовется один раз (immutable)
  // когда false будет вызываться при всех обращениях к html шаблону на котором pipe
  // иногда это необходимо в случае локализации сайта или вывода времени
  pure: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('ConvertPipe');
    return value;
  }

}
