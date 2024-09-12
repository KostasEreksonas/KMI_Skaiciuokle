import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kmi.component.html',
  styleUrl: './kmi.component.css'
})
export class KMIComponent {
  public ugis=0;
  public svoris=0;
  public KMI="";

  public KMISkaiciavimas() {
      this.KMI = "KMI: " + (this.svoris / (this.ugis/100*this.ugis/100));
  }
}
