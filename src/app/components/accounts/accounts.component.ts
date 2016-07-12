import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services/accounts.service';

@Component({
	selector: 'heroes',
	templateUrl: 'src/app/components/accounts/accounts.component.html'
})

export class AccountsComponent implements OnInit {
	selectedAccount: Account;
	accounts: Account[];
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

	onSelect(account: Account) { this.selectedAccount = account; }

	gotoDetail() {
		this.router.navigate(['/detail', this.selectedAccount.name]);
	}
}