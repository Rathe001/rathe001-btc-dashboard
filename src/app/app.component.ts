import { Component, ViewEncapsulation } from '@angular/core';
import { HeroesService } from './services/heroes.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'app',
	templateUrl: 'src/app/app.component.html',
	styles: [
		require('../scss/app.scss')
	],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		HeroesService
	],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	title = 'BTC Dashboard';
}