import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services/accounts.service';

@Component({
	selector: 'dashboard',
	template: require('./dashboard.component.html')
})

export class DashboardComponent implements OnInit {
	accounts: Account[] = [];
	errorMessage: string;

	constructor(
		private router: Router,
		private accountsService: AccountsService) {
	}

	ngOnInit() {
		this.accountsService.getAll()
		   .subscribe(
			   accounts => {
				   this.accounts = accounts.sort(function(a, b) {
					   return  (b.current - b.invested) - (a.current - a.invested);
				   });
			   },
			   error =>  this.errorMessage = <any>error);
	}

	gotoDetail(account: Account) {
		let link = ['/detail', account.id];
		this.router.navigate(link);
	}
}