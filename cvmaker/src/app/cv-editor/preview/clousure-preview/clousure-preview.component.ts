import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clousure-preview',
  templateUrl: './clousure-preview.component.html',
  styleUrls: ['./clousure-preview.component.scss']
})
export class ClousurePreviewComponent {
@Input()
clousure!:String;
}
