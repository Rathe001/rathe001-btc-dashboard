import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services/accounts.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'src/app/components/dashboard/dashboard.component.html'
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
			   accounts => this.accounts = accounts,
			   error =>  this.errorMessage = <any>error);
	}

	gotoDetail(account: Account) {
		let link = ['/detail', account.name];
		this.router.navigate(link);
	}
}