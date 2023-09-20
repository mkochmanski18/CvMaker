import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'twoDMonth'
})
export class TwoDigitsMonthPipe implements PipeTransform{
    transform(value: number, ...args: any[]) {
        if(value>10) return value;
        return '0'+value;
    }
}