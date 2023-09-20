export interface Education{
    studyDirection: string,
    title: string,
    schoolName: string,
    city:string,
    educationBegin:{year:number,month:number},
    educationEnd:{year?:number,month?:number,tillNow?:boolean},
}