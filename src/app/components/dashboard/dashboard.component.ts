import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'src/app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(
		private router: Router,
		private heroesService: HeroesService) {
	}

	ngOnInit() {
		this.heroesService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero) {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}