import { Component } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent {
  text:string = '';
  saved:boolean=false;

  constructor(
    private ceService:EditorService,
  ){}

    ngOnInit(){
      const currentText = this.ceService.getCurrentCv().description;
      this.text=currentText;
    }

  onSave(){
    this.ceService.updateDescription(this.text);
    this.saved=true;
  }
}
