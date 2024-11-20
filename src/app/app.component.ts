import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuchilloPageComponent } from './cuchillo/pages/cuchillo-page/cuchillo-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule , CuchilloPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cuchillos2doP';
}
