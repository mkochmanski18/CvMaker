import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvInterface } from 'src/app/shared/interfaces/cv.interface';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  cvData!:CvInterface;
  cvChangeSubscription!: Subscription;

  showedDataList!:{experience:boolean,software:boolean,certificates:boolean,projects:boolean,languages:boolean,interest:boolean};
  showListSub!:Subscription;
  constructor(
    private eService: EditorService,
  ){}


  ngOnInit(){
    this.showedDataList = this.eService.showedDataList;
    this.showListSub = this.eService.showedListChange.subscribe(
      newValues=>this.showedDataList=newValues
    );
    
    this.cvData = this.eService.getCurrentCv();
    this.cvChangeSubscription = this.eService.cvListChange.subscribe(
      (newCvData:CvInterface[])=>{
        this.cvData = newCvData[this.eService.currentCvIndex];
        
      }
    )
  }
  ngOnDestroy(){
    this.cvChangeSubscription.unsubscribe();
    this.showListSub.unsubscribe();
  }
}
