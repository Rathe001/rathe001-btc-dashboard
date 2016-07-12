import {
	it,
	inject,
	describe,
	beforeEachProviders,
	expect
} from '@angular/core/testing';
import { AccountsComponent } from './accounts.component';

describe('HeroesComponent', () => {
	beforeEachProviders(() => [
		AccountsComponent
	]);

	it ('should work', inject([AccountsComponent], (app: AccountsComponent) => {
		// Add real test here
		expect(2).toBe(2);
	}));
});