import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'; // Puedes cambiarlo por Lara o Nora si prefieres

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(), // Necesario para componentes con overlays o efectos
    providePrimeNG({ 
        theme: {
            preset: Aura,
            options:{
              cssLayer: false
            } // Esto configura el diseño automáticamente
        }
    })
  ]
};
