import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SearchModule } from './search/search.module';

platformBrowserDynamic([
 
])
  .bootstrapModule(SearchModule)
  .catch(err => console.error(err));
