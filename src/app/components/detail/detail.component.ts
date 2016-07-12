import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services/accounts.service';

@Component({
	selector: 'detail',
	templateUrl: 'src/app/components/detail/detail.component.html'
})

export class DetailComponent implements OnInit, OnDestroy {
	account: Account;
	sub: any;
	errorMessage: string;

	constructor(
		private accountsService: AccountsService,
		private route: ActivatedRoute) {
	}

	ngOnInit() {
		/*
		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.heroesService.getHero(id).subscribe(hero => this.hero = hero);

			.subscribe(
			   heroes => this.heroes = heroes,
			   error =>  this.errorMessage = <any>error);
		});
		*/
	}

	ngOnDestroy() {
  		this.sub.unsubscribe();
	}

	goBack() {
		window.history.back();
	}
}