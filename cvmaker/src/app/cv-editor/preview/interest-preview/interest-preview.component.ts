import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-preview',
  templateUrl: './interest-preview.component.html',
  styleUrls: ['./interest-preview.component.scss']
})
export class InterestPreviewComponent {
@Input('interest')
interestList!:any[];

}
