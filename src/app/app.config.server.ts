import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { provideClientHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
 // declarations: [],
  //imports:[ CommonModule, HttpClientModule],
  providers: [
    provideServerRendering(), provideHttpClient(), provideClientHydration()]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
