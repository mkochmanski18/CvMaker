import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent {
  navHideVisibility: boolean = true;
  topics: { name: string, text: string }[] =
    [{ name: 'userdata', text: 'Dane osobowe' },
    {name:'description', text:'Opis kandydata'},
    { name: 'education', text: 'Wykształcenie' },
    { name: 'experience', text: 'Doświadczenie' },
    { name: 'software', text: 'Oprogramowanie' },
    { name: 'certificates', text: 'Certyfikaty' },
    { name: 'projects', text: 'Projekty' },
    { name: 'languages', text: 'Języki obce' },
    { name: 'interest', text: 'Zainteresowania' },
    { name: 'clousure', text: 'Klauzula CV' },];

  constructor(
    private route: ActivatedRoute,
    private ceService: EditorService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.ceService.getCvList().forEach(
          (cv, index) => {

            if (cv.name === params['cvname']) {
              this.ceService.currentCvIndex = index;
            }
          }
        )
      }
    )

  }
  print(){
    window.print();
  }
}
