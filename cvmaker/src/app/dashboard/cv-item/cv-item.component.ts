import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvInterface } from 'src/app/shared/interfaces/cv.interface';
import { Education } from 'src/app/shared/interfaces/education.interface';
import { Userdata } from 'src/app/shared/interfaces/userdata.interface';
import { CVModel } from 'src/app/shared/models/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.scss']
})
export class CvItemComponent {
  @Input()
  cv!:CvInterface;

  cvData!:{
    name:string,
    lastModificationDate:Date,
    creationDate:Date,
    userdata:Userdata,
    education:Education[]};
  visibility:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.cvData = this.cv;
  }
  onEdit(){
    this.router.navigate(['../edit/',this.cv.name],{relativeTo:this.route})
  }
}
