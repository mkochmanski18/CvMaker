import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LanguageEnum } from 'src/app/shared/enums/language.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-foreign',
  templateUrl: './f-languages.component.html',
  styleUrls: ['./f-languages.component.scss']
})
export class ForeignLComponent {
  mastery=["A1","A2","B1","B2","C1","C2","NATIVE"];
  lForm!: FormGroup;
  name!:string;
  saved:boolean=false;
  
  showedDataList!:{experience:boolean,software:boolean,certificates:boolean,projects:boolean,languages:boolean,interest:boolean};
  showListSub!:Subscription;
  constructor(
    private ceService: EditorService,
  ){}
  ngOnInit(){
    this.showedDataList = this.ceService.showedDataList;
    this.showListSub = this.ceService.showedListChange.subscribe(
      newValues=>this.showedDataList=newValues
    );
    
    this.lForm = new FormGroup({
      positions: new FormArray([
        new FormGroup({
        language: new FormControl(),
        masteryLevel: new FormControl(),
      })]),
    });

    const languagePositions = this.ceService.getCurrentCv().foreignLanguages;
    
    if(languagePositions.length===1){
      this.lForm.setValue({positions:[...languagePositions]});
    }
    if(languagePositions.length>1){
      for(let i=1;i<languagePositions.length;i++) this.onAddPosition();
      this.lForm.setValue({positions:[...languagePositions]});
    }
  }
  ngOnDestroy(){
    this.showListSub.unsubscribe();
  }
  get positionControls() {
    return (this.lForm.get('positions') as FormArray).controls;
  }

  getRadioIds(i:number,name:string){
    return name+i;
  }
  updateShowedDataList(){
    this.ceService.changeShowingStatus(5);
  }
  onAddPosition(){
    const control = new FormGroup({
      language: new FormControl(
        null, [Validators.required]),
      masteryLevel: new FormControl(),
      
      
    });
    (<FormArray>this.lForm.get('positions')).push(control);
  }

  deletePosition(i:number){
    (<FormArray>this.lForm.get('positions')).removeAt(i);
  }

  disableEndDate(i:any){
    const cotrol = (<FormArray>this.lForm.get('positions')).controls[i];
  }

  onSubmit(){
    
    const newData = [...this.lForm.value.positions];
    this.ceService.updateLanguages(newData);
    this.saved=true;
  }
}
