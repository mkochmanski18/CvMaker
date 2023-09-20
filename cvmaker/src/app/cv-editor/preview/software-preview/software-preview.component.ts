import { Component, Input } from '@angular/core';
import { Software } from 'src/app/shared/interfaces/software.interface';

@Component({
  selector: 'app-software-preview',
  templateUrl: './software-preview.component.html',
  styleUrls: ['./software-preview.component.scss']
})
export class SoftwarePreviewComponent {
@Input()
software!:Software[];
show(){
  console.log(this.software);
  
}
}
