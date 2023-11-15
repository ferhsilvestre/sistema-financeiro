import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { UrlInterceptor } from './app/core/interceptors/url.interceptor';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }]
});
