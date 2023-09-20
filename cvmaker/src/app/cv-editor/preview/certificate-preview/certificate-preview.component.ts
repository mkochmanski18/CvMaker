import { Component, Input } from '@angular/core';
import { Certificate } from 'src/app/shared/interfaces/certificate.interface';

@Component({
  selector: 'app-certificate-preview',
  templateUrl: './certificate-preview.component.html',
  styleUrls: ['./certificate-preview.component.scss']
})
export class CertificatePreviewComponent {
@Input()
certificates!:Certificate[];
}
