import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { Totals } from '../../models/totals.model';
import { AccountsService } from '../../services/accounts.service';
import { ConfigService } from '../../services/config.service';
import { HistoryService } from '../../services/history.service';
import { TotalsService } from '../../services/totals.service';

@Component({
	selector: 'heroes',
	templateUrl: 'src/app/components/accounts/accounts.component.html',
	providers: [
		ConfigService,
		HistoryService,
		TotalsService
	]
})

export class AccountsComponent implements OnInit {
	selectedAccount: Account;
	accounts: Account[];
	errorMessage: string;
	loopTimerId: number;
	totals: Totals;

	constructor(
		private configService: ConfigService,
		private historyService: HistoryService,
		private totalsService: TotalsService,
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
		if(this.accounts) {
			this.historyService.set(this.accounts);
		}
		this.accountsService.getAll()
		   .subscribe(
			   accounts => {
				   this.accounts = accounts;

				   this.totalsService.set(accounts);
				   this.totals = this.totalsService.get();
			   },
			   error => this.errorMessage = <any>error);
	}

	onSelect(account: Account) {
		this.selectedAccount = this.selectedAccount === account ? undefined : account;
	}

	getNetValue(account: Account) {
		return account.current - account.invested;
	}

	getNetPercent(account: Account) {
		return account.current / account.invested - 1;
	}
}