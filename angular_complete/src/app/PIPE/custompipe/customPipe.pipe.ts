import { Pipe ,PipeTransform } from "@angular/core";

@Pipe({
    name:'customPipe'
})
export class CustomPipePipe implements PipeTransform{
   transform(value: any, ...args: any[]) {
       if(!value) return value;
       else if(typeof value!='string'){
        return null;
       }
       return value.toUpperCase()+'SHIV SONI'+'this is custom pipe'.slice(2,15)
   }
}