import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LoggingService, LoggingServiceToken } from './app/logging.service';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: LoggingServiceToken,
      useClass: LoggingService,
    },
  ],
}).catch((err) => console.error(err));
