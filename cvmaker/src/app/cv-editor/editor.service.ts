import { Injectable } from "@angular/core";
import { CVModel } from "../shared/models/cv.model";
import { Subject } from "rxjs";
import { Userdata } from "../shared/interfaces/userdata.interface";
import { Education } from "../shared/interfaces/education.interface";
import { CvInterface } from "../shared/interfaces/cv.interface";
import { Experience } from "../shared/interfaces/experience.interface";
import { Project } from "../shared/interfaces/project.interface";
import { ForeignLanguage } from "../shared/interfaces/f-language.interface";
import { Software } from "../shared/interfaces/software.interface";
import { Certificate } from "../shared/interfaces/certificate.interface";
import { LanguageEnum } from "../shared/enums/language.enum";
import { Interest } from "../shared/interfaces/interest.interface";

@Injectable({providedIn:'root'})
export class EditorService{

    private cvList:CvInterface[]=[];
    cvListChange = new Subject<CvInterface[]>
    currentCvIndex:number=0;
    showedDataList:{experience:boolean,software:boolean,certificates:boolean,projects:boolean,languages:boolean,interest:boolean} = {
        experience: true,
        software: true,
        certificates: true,
        projects: true,
        languages: true,
        interest: true,
    }
    showedListChange = new Subject<{experience:boolean,software:boolean,certificates:boolean,projects:boolean,languages:boolean,interest:boolean}>;
    changeShowingStatus(element:number){
        switch(element){
            case 1:
                this.showedDataList.experience = !this.showedDataList.experience;
                break;
            case 2:
                this.showedDataList.software = !this.showedDataList.software;
                break;
            case 3:
                this.showedDataList.certificates = !this.showedDataList.certificates;
                break;
            case 4:
                this.showedDataList.projects = !this.showedDataList.projects;
                break;
            case 5:
                this.showedDataList.languages = !this.showedDataList.languages;
                break;
            case 6:
                this.showedDataList.interest = !this.showedDataList.interest;
                break;
        }
        console.log(this.showedDataList);
        
    }

    ngOnInit(){
        this.showedListChange.next(this.showedDataList);
    }
    constructor(){
        this.createCV('1');
        const userdata = {
            name:"Jan", 
            surname:"Kowalski",
            profession:"Sprzedawca",
            github:"kowal12",
            linkedin:"kowal",
            imageSrc:"",
            phoneNumber:"123456123",
            email:"kowal@12",
            domicile:"Domowa 12",
            birthdate:new Date()
        };
        const education = {
            studyDirection: 'Informatyka',
            title: 'Technik',
            schoolName: 'Zespół Szkół Zawodowych im. Jana III Sobieskiego',
            city:'Przeworsk',
            educationBegin:{year:2015,month:9},
            educationEnd:{year:2019,month:6,tillNow:false},
        };
        const exp = {
            job:'Sprzedawca',
            company:'DajToSA',
            description:'Firma sprzedająca dobra materialne',
            workBegin:{year:2010,month:2},
            workEnd:{year:2012,month: 7,tillNow:false},
        }
        const clousure = 'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).';
        this.updateUserdata(userdata);
        this.updateDescription("Jestem absolwentem studiów I stopnia Politechniki Rzeszowskiej, na kierunku Informatyka. Rozwijam się w kierunku Frontend Developera. Wyróżnia mnie sumienność, zorganizowanie oraz zaangażowanie pracę.")
        this.updateEducation([education]);
        this.updateExperience([exp]);
        this.updateInterest([{interest:'Sport'},{interest:"Muzyka"}]);
        this.updateCertificates([{certificate:"Kurs Cybersecurity"}]);
        this.updateProjects([{name:"Test",technology:"Angular,NestJS,MySQL",description:"Aplikacja w formie testu sprawdzająca wiedze..."}])
        this.updateLanguages([{language:'Angielski',masteryLevel:LanguageEnum.B2}]);
        this.updateSoftware([{software:"React"},{software:"Angular"},{software:"CSS, SASS"}, {software:"MySQL, PostgreSQL"}])
        this.updateClousure(clousure);
    }

    createCV(name:string){
        const userdata = {
            name:"", 
            surname:"",
            profession:"",
            github:"",
            linkedin:"",
            imageSrc:"",
            phoneNumber:"",
            email:"",
            domicile:"",
            birthdate:new Date()
        }
        const currentDate = new Date();
        //const newCV = new CVModel(name,currentDate,currentDate, userdata,[],'')
        const newCV:CvInterface = {
            name,
            creationDate:currentDate,
            lastModificationDate:currentDate, 
            userdata,
            education:[],
            experience:[],
            projects:[],
            software:[],
            certificates:[],
            interest:[],
            foreignLanguages:[],
            clousure:'',
            description: '',
        };
        this.cvList.push(newCV);
        this.cvListChange.next(this.cvList);
    }

    getCvList(){
        return this.cvList;
    }
    getCurrentCv(){
        return this.cvList[this.currentCvIndex];
    }
    getCvListLength(){
        return this.cvList.length;
    }
    
    updateUserdata(data:Userdata){

        this.cvList[this.currentCvIndex].userdata=data;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
           
    }
    updateEducation(education:Education[]){
            
        this.cvList[this.currentCvIndex].education=education;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateExperience(exp:Experience[]){
       
        this.cvList[this.currentCvIndex].experience=exp;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
        
    }
    updateProjects(projects:Project[]){
        
        this.cvList[this.currentCvIndex].projects=projects;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateSoftware(software:Software[]){
        
        this.cvList[this.currentCvIndex].software=software;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateCertificates(certs:Certificate[]){
       
        this.cvList[this.currentCvIndex].certificates=certs;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateInterest(interest:Interest[]){
        
        this.cvList[this.currentCvIndex].interest=interest;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateClousure(text:string){
        
        this.cvList[this.currentCvIndex].clousure=text;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateDescription(text:string){
        
        this.cvList[this.currentCvIndex].description=text;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
    updateLanguages(lang:ForeignLanguage[]){
        this.cvList[this.currentCvIndex].foreignLanguages=lang;
        this.cvList[this.currentCvIndex].lastModificationDate=new Date();
        this.cvListChange.next(this.cvList);
    }
}