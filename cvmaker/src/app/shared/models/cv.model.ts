import { Education } from "../interfaces/education.interface";
import { Userdata } from "../interfaces/userdata.interface";

export class CVModel{
    private name:string;
    private creationDate: Date;
    private lastModificationDate: Date;
    private userdata:Userdata;
    private education: Education[];
    private clousure:string;

    constructor(name:string,creationDate:Date,lastModificationDate:Date, userdata:Userdata,education:Education[],clousure:string){
        this.name = name;
        this.creationDate = creationDate;
        this.lastModificationDate = lastModificationDate;
        this.userdata = userdata;
        this.education = education;
        this.clousure = clousure;
    }

    getCV(){
        const cv = {
            name: this.name,
            creationDate: this.creationDate,
            lastModificationDate: this.lastModificationDate,
            userdata: this.userdata,
            education:this.education,
            clousure:this.clousure,
        }
        return cv;
    }

    getName(){
        return this.name;
    }
    setName(newName:string){
        this.name=newName;
        this.lastModificationDate = new Date();
    }
    getUserdata(){
        return this.userdata;
    }
    setUserdata(data:Userdata){
        this.userdata = data;
        this.lastModificationDate = new Date();
        console.log(this.userdata);
        
    }
    
    getEducation(){
        return this.education;
    }
    setEducation(data:Education[]){
        this.education = data;
        this.lastModificationDate = new Date();
    }

    getClousure(){
        return this.clousure;
    }
    setClousure(text:string){
        this.clousure = text;
    }
    
}