import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { Totals } from '../../models/totals.model';
import { Prices } from '../../models/prices.model';
import { AccountsService } from '../../services/accounts.service';
import { ConfigService } from '../../services/config.service';
import { HistoryService } from '../../services/history.service';
import { TotalsService } from '../../services/totals.service';
import { PricesService } from '../../services/prices.service';

@Component({
	selector: 'accounts',
	template: require('./accounts.component.html'),
	providers: [
		ConfigService,
		HistoryService,
		TotalsService,
		PricesService
	]
})

export class AccountsComponent implements OnInit {
	selectedAccount: Account;
	accounts: Account[];
	errorMessage: string;
	loopTimerId: number;
	totals: Totals;
	loading: boolean;
	lastAccountRefresh: Date;
	prices: Prices;

	constructor(
		private configService: ConfigService,
		private historyService: HistoryService,
		private totalsService: TotalsService,
		private pricesService: PricesService,
		private accountsService: AccountsService) {
	}

	ngOnInit() {
		this.getAccounts();
		this.loopTimerId = window.setInterval(() => {
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
		this.loading = true;
		this.accountsService.getAll()
			.subscribe(
				accounts => {
					let selected;
					this.accounts = accounts;
					this.loading = false;
					this.lastAccountRefresh = new Date();
					this.totalsService.set(accounts);
					this.totals = this.totalsService.get();

					// Re-select the same selected account;
					if (this.selectedAccount) {
						selected = accounts.filter((act: Account) => act.id === this.selectedAccount.id)[0];
						this.onSelect(selected);
					}
				},
				error => this.errorMessage = <any>error);
		
		if(this.selectedAccount) {
			this.pricesService.getPrices(this.selectedAccount.id)
				.subscribe(
					prices => this.prices = prices,
					error => this.errorMessage = <any>error);
		}
	}

	onSelect(account: Account) {
		if(account) {
			this.selectedAccount = this.selectedAccount === account ? undefined : account;
			if(this.selectedAccount) {
				this.prices = undefined;
				this.pricesService.getPrices(this.selectedAccount.id)
					.subscribe(
						prices => this.prices = prices,
						error => this.errorMessage = <any>error);
			}
		}
	}

	getNetValue(account: Account) {
		return account.current - account.invested;
	}

	getNetPercent(account: Account) {
		return account.current / account.invested - 1;
	}
}