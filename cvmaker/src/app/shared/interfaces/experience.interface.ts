export interface Experience{
    job: string,
    company: string,
    description: string,
    workBegin:{year:number,month:number},
    workEnd:{year?:number,month?:number,tillNow?:boolean},
}