import { Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects-preview',
  templateUrl: './projects-preview.component.html',
  styleUrls: ['./projects-preview.component.scss']
})
export class ProjectsPreviewComponent {
@Input('projects')
projectsList!:Project[];
}
