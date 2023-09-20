import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  expForm!: FormGroup;
  maxYear:number = new Date().getFullYear();
  positionsVisibility: {id:number,visibility:boolean}[]=[];
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
    
    this.expForm = new FormGroup({
      positions: new FormArray([
        new FormGroup({
          job: new FormControl(
          null, ),
        company: new FormControl(
          null
        ),
        description: new FormControl(
          null
        ),
        workBegin: new FormGroup({
          year: new FormControl(
            null
          ),
          month: new FormControl(
            null
          ),
        }),
        workEnd: new FormGroup({
          year: new FormControl(
            null,
          ),
          month: new FormControl(
            null
          ),
          tillNow: new FormControl(false),
        }),
      })]),
    });
    this.positionsVisibility.push({id:this.positionsVisibility.length,visibility:true});
  
    const experiencePositions = this.ceService.getCurrentCv().experience;
    
    if(experiencePositions.length===1){
      
      this.expForm.setValue({positions:[...experiencePositions]});
    }
    if(experiencePositions.length>1){
      for(let i=1;i<experiencePositions.length;i++) this.onAddPosition();
      this.expForm.setValue({positions:[...experiencePositions]});
    }

  }
  ngOnDestroy(){
    this.showListSub.unsubscribe();
  }
  
  get positionControls() {
    return (this.expForm.get('positions') as FormArray).controls;
  }
  
  updateShowedDataList(){
    this.ceService.changeShowingStatus(1);
  }
  onAddPosition(){
    const control = new FormGroup({
      job: new FormControl(
      null, [Validators.required]),
    company: new FormControl(
      null,[Validators.required]
    ),
    description: new FormControl(
      null,[Validators.required]
    ),
    workBegin: new FormGroup({
      year: new FormControl(
        null,[Validators.required]
      ),
      month: new FormControl(
        null,[Validators.required]
      ),
    }),
    workEnd: new FormGroup({
      year: new FormControl(
        null,
      ),
      month: new FormControl(
        null
      ),
      tillNow: new FormControl(false),
    }),
  });
    (<FormArray>this.expForm.get('positions')).push(control);
   
    this.positionsVisibility.push({id:this.positionsVisibility.length,visibility:true});
  }

  deletePosition(i:number){
    (<FormArray>this.expForm.get('positions')).removeAt(i);
  }

  disableEndDate(i:any){
    const cotrol = (<FormArray>this.expForm.get('positions')).controls[i];
    const dateObject = cotrol.get('workEnd');
    
    if(dateObject?.get('tillNow')?.value){
      dateObject?.get('year')?.enable();
      dateObject?.get('month')?.enable();
    }
    else {
      dateObject?.get('year')?.disable();
      dateObject?.get('month')?.disable();
    }
  }

  changeVisibility(id:number){
    this.positionsVisibility[id].visibility = !this.positionsVisibility[id].visibility;
  }

  onSubmit(){
    const newData = [...this.expForm.value.positions];
    this.ceService.updateExperience(newData);
    this.saved=true;
  }
}
