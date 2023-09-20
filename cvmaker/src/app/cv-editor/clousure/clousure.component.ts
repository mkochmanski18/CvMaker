import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-clousure',
  templateUrl: './clousure.component.html',
  styleUrls: ['./clousure.component.scss']
})
export class ClousureComponent {
  clousureText:string = '';
  saved:boolean=false;

  constructor(
    private ceService:EditorService,
  ){}

    ngOnInit(){
      const currentText = this.ceService.getCurrentCv().clousure;
      this.clousureText=currentText;
    }

  onSave(){
    this.ceService.updateClousure(this.clousureText);
    this.saved=true;
  }
}
