import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyname'
})
export class ModifynamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    let fullname:string[] = value.split(' ');
    // console.log(fullname[0]);
    // console.log(fullname[1][0]);
    // console.log(fullname[2]);
    let middle:string = "";
    if( fullname.length >= 3){
        middle = fullname[1][0];
    }
    let output:string = fullname[fullname.length - 1] + "," + fullname[0] + middle;
    return output;
  }

}
