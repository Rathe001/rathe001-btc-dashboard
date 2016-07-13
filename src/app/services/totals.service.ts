import { Injectable } from '@angular/core';
import { Totals } from '../models/totals.model';
import { Account } from '../models/account.model';

@Injectable()
export class TotalsService {
	totals: Totals;

	get (): Totals {
		return this.totals;
	}

	set (accounts: Account[]) {
		this.totals = {
			current: 0,
			invested: 0
		};

		for(let i=0; i<accounts.length; i++) {
			this.totals.current += accounts[i].current;
			this.totals.invested += accounts[i].invested;
		}
	}
}