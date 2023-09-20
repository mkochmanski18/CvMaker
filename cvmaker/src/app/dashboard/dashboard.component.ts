import { Component } from '@angular/core';
import { EditorService } from '../cv-editor/editor.service';
import { CVModel } from '../shared/models/cv.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CvInterface } from '../shared/interfaces/cv.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newCvName:string = '';
  cvAmount:number = 0;
  cvListing!: CvInterface[];
  cvListSub!:Subscription;
  loggedIn:boolean = false;

  constructor(
    private editorService:EditorService
  ){}

  ngOnInit(){
    this.cvAmount = this.editorService.getCvListLength();
    if(this.cvAmount>0) this.cvListing = this.editorService.getCvList();
    this.cvListSub = this.editorService.cvListChange.subscribe(
      list=>{this.cvListing=list;this.cvAmount=list.length;
      }
    );
  }
  ngOnDestroy(){
    this.cvListSub.unsubscribe();
  }
  onCvCreate(){
    if(this.newCvName) this.editorService.createCV(this.newCvName);
    
  }
  

}
