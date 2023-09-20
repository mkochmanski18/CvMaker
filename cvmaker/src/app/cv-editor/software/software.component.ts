import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-foreign',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent {
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
        software: new FormControl(
          null, [Validators.required]),
      })]),
    });

    const softwarePositions = this.ceService.getCurrentCv().software;
    
    if(softwarePositions.length===1){
      this.sForm.setValue({positions:[...softwarePositions]});
    }
    if(softwarePositions.length>1){
      for(let i=1;i<softwarePositions.length;i++) this.onAddPosition();
      this.sForm.setValue({positions:[...softwarePositions]});
    }
  }
  ngOnDestroy(){
    this.showListSub.unsubscribe();
  }
  get positionControls() {
    return (this.sForm.get('positions') as FormArray).controls;
  }
  showForm(){
    console.log(this.sForm);
  }
  updateShowedDataList(){
    this.ceService.changeShowingStatus(2);
  }
  onAddPosition(){
    const control = new FormGroup({
      software: new FormControl(
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
    console.log(newData);
    
    this.ceService.updateSoftware(newData);
    this.saved=true;
  }
}
