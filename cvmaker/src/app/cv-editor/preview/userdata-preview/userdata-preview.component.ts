import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvInterface } from 'src/app/shared/interfaces/cv.interface';
import { Userdata } from 'src/app/shared/interfaces/userdata.interface';
import { EditorService } from '../../editor.service';

@Component({
  selector: 'app-userdata-preview',
  templateUrl: './userdata-preview.component.html',
  styleUrls: ['./userdata-preview.component.scss']
})
export class UserdataPreviewComponent {

  @Input()
  userdata!: Userdata;

  // cvData!:CvInterface;
  // cvChangeSubscription!: Subscription;
  // constructor(
  //   private eService: EditorService,
  // ){}

  // ngOnInit(){
  //   this.cvData = this.eService.getCurrentCv();
  //   console.log(this.cvData);
  //   this.cvChangeSubscription = this.eService.cvListChange.subscribe(
  //     (newCvData:CvInterface[])=>{
  //       this.cvData = newCvData[this.eService.currentCvIndex];
  //       console.log(this.cvData);
        
  //     }
  //   )
  //   console.log(this.userdata);
    
  // }
  // ngOnDestroy(){
  //   this.cvChangeSubscription.unsubscribe();
  // }

}
