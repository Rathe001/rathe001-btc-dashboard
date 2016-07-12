import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AccountsService {
	//private accountsUrl = 'https://www.ceetus.com/totes/bin/get_transactions.php';
	private accountsUrl = 'src/mocks/accounts.json';

	private extractData(res: Response) {
		let body = res.json();
		let output = body;
/*
		let output = [];
		for(let i in body) {
			let item = {
				id: i,
				name: body[i][0].account,
				value: body[i][0].profit,
			};
			output.push(item);
		}
*/
		return output.data || { };
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	constructor (private http: Http) {}

	get(id: number): Observable<Account[]> {
		return this.http.get(this.accountsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getAll (): Observable<Account[]> {
		return this.http.get(this.accountsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
}