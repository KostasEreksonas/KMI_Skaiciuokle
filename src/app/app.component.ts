import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KMIComponent } from './components/kmi/kmi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KMIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KMI_Skaiciuokle';
}
