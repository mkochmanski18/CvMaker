import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  eduForm!: FormGroup;
  maxYear:number = new Date().getFullYear();
  positionsVisibility: {id:number,visibility:boolean}[]=[];
  name!:string;
  saved:boolean=false;
  
  constructor(
    private ceService: EditorService
  ){}
  ngOnInit(){
    this.eduForm = new FormGroup({
      positions: new FormArray([
        new FormGroup({
        studyDirection: new FormControl(
          null),
        title: new FormControl(
          null
        ),
        schoolName: new FormControl(
          null
        ),
        city: new FormControl(
          null
        ),
        educationBegin: new FormGroup({
          year: new FormControl(
            null
          ),
          month: new FormControl(
            null
          ),
        }),
        educationEnd: new FormGroup({
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

    const educationPositions = this.ceService.getCurrentCv().education;
    
    if(educationPositions.length===1){
      this.eduForm.setValue({positions:[...educationPositions]});
    }
    if(educationPositions.length>1){
      for(let i=1;i<educationPositions.length;i++) this.onAddPosition();
      this.eduForm.setValue({positions:[...educationPositions]});
    }

  }
  get positionControls() {
    return (this.eduForm.get('positions') as FormArray).controls;
  }
  
  onAddPosition(){
    const control = new FormGroup({
      studyDirection: new FormControl(
        null, [Validators.required]),
      title: new FormControl(
        null,[Validators.required]
      ),
      schoolName: new FormControl(
        null,[Validators.required]
      ),
      city: new FormControl(
        null,[Validators.required]
      ),
      educationBegin: new FormGroup({
        year: new FormControl(
          null,[Validators.required]
        ),
        month: new FormControl(
          null,[Validators.required]
        ),
      }),
      educationEnd: new FormGroup({
        year: new FormControl(
          null,
        ),
        month: new FormControl(
          null
        ),
        tillNow: new FormControl(),
      }),
      
    });
    (<FormArray>this.eduForm.get('positions')).push(control);
   
    this.positionsVisibility.push({id:this.positionsVisibility.length,visibility:true});
  }

  disableEndDate(i:any){
    const cotrol = (<FormArray>this.eduForm.get('positions')).controls[i];
    const dateObject = cotrol.get('educationEnd');
    
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
  deletePosition(i:number){
    (<FormArray>this.eduForm.get('positions')).removeAt(i);
  }

  onSubmit(){
    const newData = [...this.eduForm.value.positions];
    this.ceService.updateEducation(newData);
    this.saved=true;
  }
}
