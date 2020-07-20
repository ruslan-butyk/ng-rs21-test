import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Rs21DemoAppModule } from './rs21-demo-app/rs21-demo-app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Rs21DemoAppModule)
  .catch(err => console.error(err));
