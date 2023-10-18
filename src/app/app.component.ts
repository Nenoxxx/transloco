import { Component } from '@angular/core';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transloco-tryout';

  constructor(private translateService: TranslocoService) { }

  ngOnInit() {
    this.setLanguage(getBrowserLang());
  }

  setLanguage(language: string | undefined) {
    if (language == 'de' || language == 'en' || language == 'fr') {
      this.translateService.setActiveLang(language);
    } else {
      this.translateService.setActiveLang('en');
    }
  }
}
