import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'detail',
	templateUrl: 'src/app/components/detail/detail.component.html'
})

export class DetailComponent implements OnInit, OnDestroy {
	hero: Hero;
	sub: any;

	constructor(
		private heroesService: HeroesService,
		private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.heroesService.getHero(id).then(hero => this.hero = hero);
		});
	}

	ngOnDestroy() {
  		this.sub.unsubscribe();
	}

	goBack() {
		window.history.back();
	}
}