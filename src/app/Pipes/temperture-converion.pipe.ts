import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempertureConverion',
  standalone: true
})
export class TempertureConverionPipe implements PipeTransform {

  transform(value: number,unit:string):number | null{
    if(value && !isNaN(value))
      {
       if(unit==='c')
        {
          return (value-32)*5/9 ;
        }
        else if(unit==='f')
        {
          return value;
        }
      }
      return null
    
  }

}
