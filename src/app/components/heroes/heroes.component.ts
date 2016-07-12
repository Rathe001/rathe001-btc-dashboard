import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'heroes',
	templateUrl: 'src/app/components/heroes/heroes.component.html'
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private router: Router,
		private heroesService: HeroesService) {
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		this.heroesService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	gotoDetail() {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}