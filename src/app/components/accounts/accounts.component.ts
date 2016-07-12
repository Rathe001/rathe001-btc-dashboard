import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services/accounts.service';
import { ConfigService } from '../../services/config.service';

@Component({
	selector: 'heroes',
	templateUrl: 'src/app/components/accounts/accounts.component.html',
	providers: [ConfigService]
})

export class AccountsComponent implements OnInit {
	selectedAccount: Account;
	accounts: Account[];
	errorMessage: string;
	loopTimerId: number;

	constructor(
		private configService: ConfigService,
		private accountsService: AccountsService) {
	}

	ngOnInit() {
		this.getAccounts();
		this.loopTimerId = setInterval(() => {
			this.getAccounts();
		}, this.configService.getAppConfig().getAccountsInterval);
	}

	ngOnDestroy() {
		if (this.loopTimerId) {
			clearInterval(this.loopTimerId);
		}
	}

	getAccounts() {
		this.accountsService.getAll()
		   .subscribe(
			   accounts => this.accounts = accounts,
			   error =>  this.errorMessage = <any>error);
	}

	onSelect(account: Account) { this.selectedAccount = account; }
}