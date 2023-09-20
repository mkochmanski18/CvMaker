import { Component, Input } from '@angular/core';
import { Education } from 'src/app/shared/interfaces/education.interface';

@Component({
  selector: 'app-education-preview',
  templateUrl: './education-preview.component.html',
  styleUrls: ['./education-preview.component.scss']
})
export class EducationPreviewComponent {
  @Input()
  education!:Education[];
}
