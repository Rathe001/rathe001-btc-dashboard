import {
	it,
	inject,
	describe,
	beforeEachProviders,
	expect
} from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
	beforeEachProviders(() => [
		HeroesComponent
	]);

	it ('should work', inject([HeroesComponent], (app: HeroesComponent) => {
		// Add real test here
		expect(2).toBe(2);
	}));
});