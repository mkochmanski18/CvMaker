import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/shared/interfaces/experience.interface';

@Component({
  selector: 'app-exp-preview',
  templateUrl: './exp-preview.component.html',
  styleUrls: ['./exp-preview.component.scss']
})
export class ExpPreviewComponent {
  @Input()
  exp!:Experience[];

  
}
