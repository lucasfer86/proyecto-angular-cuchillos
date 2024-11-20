import { Component } from '@angular/core';
import { ListCuchilloComponent } from '../../list-cuchillo/list-cuchillo.component';

@Component({
  selector: 'app-cuchillo-page',
  standalone: true,
  imports: [ListCuchilloComponent],
  templateUrl: './cuchillo-page.component.html',
  styleUrl: './cuchillo-page.component.css'
})
export class CuchilloPageComponent {

}
