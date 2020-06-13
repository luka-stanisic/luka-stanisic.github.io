import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-app';

  scrollToElement(element): void {
    element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}
