import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

const providers: Provider = [
  provideRouter(routes),
  provideAnimations()
];

export const appConfig: ApplicationConfig = { providers };
