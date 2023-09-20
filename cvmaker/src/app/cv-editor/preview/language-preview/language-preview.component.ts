import { Component, Input } from '@angular/core';
import { ForeignLanguage } from 'src/app/shared/interfaces/f-language.interface';

@Component({
  selector: 'app-language-preview',
  templateUrl: './language-preview.component.html',
  styleUrls: ['./language-preview.component.scss']
})
export class LanguagePreviewComponent {
@Input()
  language!:ForeignLanguage[];

}
