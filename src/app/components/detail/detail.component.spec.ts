import {
	it,
	inject,
	describe,
	beforeEachProviders,
	expect
} from '@angular/core/testing';
import { DetailComponent } from './detail.component';

describe('AppComponent', () => {
	beforeEachProviders(() => [
		DetailComponent
	]);

	it ('should work', inject([DetailComponent], (app: DetailComponent) => {
		// Add real test here
		expect(2).toBe(2);
	}));
});