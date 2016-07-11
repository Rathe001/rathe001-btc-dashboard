import { Injectable } from '@angular/core';
import { HEROES } from '../../mocks/heroes';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
}