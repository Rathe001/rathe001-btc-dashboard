import { Component, ViewEncapsulation } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'app',
	template: require('./app.component.html'),
	styles: [
		require('../scss/app.scss')
	],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		AccountsService
	],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	title = 'Investment Dashboard';
}