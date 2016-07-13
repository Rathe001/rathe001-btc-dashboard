import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable()
export class HistoryService {
	accounts: Account[];

	get(): Account[] {
		return this.accounts;
	}

	set (accounts: Account[]) {
		this.accounts = accounts;
	}
}