import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((el)=>{
        //searching element
        if(el.name.indexOf(args)===-1){
          return false;
        }
        else {
               return true;
     }
    
    });
  }

}
