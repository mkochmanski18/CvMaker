import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  sForm!: FormGroup;
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

    this.sForm = new FormGroup({
      positions: new FormArray([
        new FormGroup({
        name: new FormControl(null, [Validators.required]),
        technology: new FormControl(null,[Validators.required]),
        description: new FormControl(),
      })]),
    });

    const projectsPositions = this.ceService.getCurrentCv().projects;
    
    if(projectsPositions.length===1){
      this.sForm.setValue({positions:[...projectsPositions]});
    }
    if(projectsPositions.length>1){
      for(let i=1;i<projectsPositions.length;i++) this.onAddPosition();
      this.sForm.setValue({positions:[...projectsPositions]});
    }
  }
  ngOnDestroy(){
    this.showListSub.unsubscribe();
  }
  get positionControls() {
    return (this.sForm.get('positions') as FormArray).controls;
  }
  updateShowedDataList(){
    this.ceService.changeShowingStatus(4);
  }

  onAddPosition(){
    const control = new FormGroup({
      name: new FormControl( null, [Validators.required]),
      technology: new FormControl( null,[Validators.required]),
      description: new FormControl( null,[Validators.required]),
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
    
    this.ceService.updateProjects(newData);
    this.saved=true;
  }
}
