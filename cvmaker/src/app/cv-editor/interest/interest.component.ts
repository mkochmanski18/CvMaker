import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent {
  sForm!: FormGroup;
  name!:string;
  saved:boolean=false;
  
  showedDataList!:{experience:boolean,software:boolean,certificates:boolean,projects:boolean,languages:boolean,interest:boolean};
  showListSub!:Subscription;
  constructor(
    private ceService: EditorService
  ){}

  ngOnInit(){
    this.showedDataList = this.ceService.showedDataList;
    this.showListSub = this.ceService.showedListChange.subscribe(
      newValues=>this.showedDataList=newValues
    );
    
    this.sForm = new FormGroup({
      positions: new FormArray([
        new FormGroup({
          interest: new FormControl(null, [Validators.required]),
      })]),
    });

    const hobbyPositions = this.ceService.getCurrentCv().interest;
    
    if(hobbyPositions.length===1){
      this.sForm.setValue({positions:[...hobbyPositions]});
    }
    if(hobbyPositions.length>1){
      for(let i=1;i<hobbyPositions.length;i++) this.onAddPosition();
      this.sForm.setValue({positions:[...hobbyPositions]});
    }
  }
  ngOnDestroy(){
    this.showListSub.unsubscribe();
  }
  get positionControls() {
    return (this.sForm.get('positions') as FormArray).controls;
  }

  updateShowedDataList(){
    this.ceService.changeShowingStatus(6);
  }
  onAddPosition(){
    const control = new FormGroup({
      interest: new FormControl(
        null, [Validators.required]),
      
      
    });
    (<FormArray>this.sForm.get('positions')).push(control);
  }

  deletePosition(i:number){
    (<FormArray>this.sForm.get('positions')).removeAt(i);
  }

  disableEndDate(i:any){
    const cotrol = (<FormArray>this.sForm.get('positions')).controls[i];
  }

  onSubmit(){
    const newData = [...this.sForm.value.positions];
    
    this.ceService.updateInterest(newData);
    this.saved=true;
  }
}
