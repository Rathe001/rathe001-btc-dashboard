import { bootstrap } from '@angular/platform-browser-dynamic';
import { XHRBackend } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

if (process.env.ENV === 'production') {
	enableProdMode();
}
bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	XHRBackend
]);