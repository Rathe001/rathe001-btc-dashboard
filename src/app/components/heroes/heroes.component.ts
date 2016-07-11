import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'heroes',
	templateUrl: 'src/app/components/heroes/heroes.component.html',
	directives: [DetailComponent]
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	ngOnInit() {
		this.getHeroes();
	}

	constructor(private heroesService: HeroesService) { }

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		this.heroesService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
}