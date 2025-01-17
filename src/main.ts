import { enableProdMode } from '@angular/core';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
