import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { App } from './app.component';
describe('App', () => {
  beforeEachProviders(() => [
    App
  ]);
  it ('should work', inject([App], (app: App) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});