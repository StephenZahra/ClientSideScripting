import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'ConvertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        return value.replace(args[0], ' ');
    }
     
}