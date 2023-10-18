import { Component } from '@angular/core';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transloco-tryout';
  lang: string | undefined = '';

  constructor(private translateService: TranslocoService) { }

  ngOnInit() {
    this.lang = getBrowserLang();
    if (this.lang != null) {
      this.translateService.setActiveLang(this.lang);
    }
  }

  setLanguage(language: string) {
    this.translateService.setActiveLang(language);
  }
}
