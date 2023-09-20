import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CVModel } from 'src/app/shared/models/cv.model';
import { EditorService } from '../editor.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent {
  sForm!: FormGroup;
  saved:boolean=false;

  constructor(
    private ceService:EditorService, //CvEditorService
    private route: ActivatedRoute,
  ){}
  ngOnInit(){
    
    this.sForm = new FormGroup({
      name: new FormControl(
        null, [Validators.required]),
      surname: new FormControl(
        null, [Validators.required]),
      profession: new FormControl(
        null,),
      imageSrc: new FormControl(
        null,),
      email: new FormControl(
        null, [Validators.required]),
      phoneNumber: new FormControl(
        null, [Validators.required]),
      github: new FormControl(
        null,),
      linkedin: new FormControl(
        null,),
      domicile: new FormControl(
        null,),
      birthdate: new FormControl(
        null,),
  });

  const currentUserdata = this.ceService.getCurrentCv().userdata;
  if(currentUserdata){
    this.sForm.setValue({...currentUserdata});
  }
  
}
onSubmit(){
  const newData = {...this.sForm.value};
  const name = this.route.parent?.snapshot.params['cvname'];
  
  this.ceService.updateUserdata(newData);
  this.saved=true;
}
saveData(){
}
}
