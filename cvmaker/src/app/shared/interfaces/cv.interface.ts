import { Certificate } from "./certificate.interface";
import { Education } from "./education.interface";
import { Experience } from "./experience.interface";
import { ForeignLanguage } from "./f-language.interface";
import { Interest } from "./interest.interface";
import { Project } from "./project.interface";
import { Software } from "./software.interface";
import { Userdata } from "./userdata.interface";

export interface CvInterface{
    name:string,
    creationDate: Date,
    lastModificationDate: Date,
    userdata:Userdata,
    education: Education[],
    experience: Experience[],
    projects: Project[],
    foreignLanguages: ForeignLanguage[],
    software: Software[],
    certificates: Certificate[],
    interest: Interest[],
    clousure:string,
    description:string,
}