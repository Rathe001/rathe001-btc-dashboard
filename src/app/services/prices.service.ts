import { Injectable } from '@angular/core';
import { Prices } from '../models/prices.model';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PricesService {

	private extractBtcData(res: Response) {
		let body = res.json();

		body.data.prices[0].price = parseFloat(body.data.prices[0].price);

		return body.data.prices[0] || { };
	}

	private extractLtcData(res: Response) {
		let body = res.json();

		body.data.prices[0].price = parseFloat(body.data.prices[0].price);

		return body.data.prices[0] || { };
	}

	private extractGoldData(res: Response) {
		let body = res.json(),
			usdRate = body.filter(fiat => fiat.code === 'USD')[0].rate;

		return {
				price: usdRate / parseFloat(body.filter(fiat => fiat.code === 'XAU')[0].rate),
				exchange: 'Bitpay'
			} || { };
	}

	private extractSilverData(res: Response) {
		let body = res.json(),
			usdRate = body.filter(fiat => fiat.code === 'USD')[0].rate;

		return {
				price: usdRate / parseFloat(body.filter(fiat => fiat.code === 'XAG')[0].rate),
				exchange: 'Bitpay'
			} || { };
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	constructor (private http: Http) {}

	getPrices (id: string): Observable<Prices> {
		let url, callback;

		switch(id) {
			case 'bitcoin':
				url = 'https://chain.so/api/v2/get_price/BTC/USD';
				callback = this.extractBtcData;
				break;
			case 'litecoin':
				url = 'https://chain.so/api/v2/get_price/LTC/USD';
				callback = this.extractLtcData;
				break;
			case 'silver':
				url = 'https://bitpay.com/api/rates';
				callback = this.extractSilverData;
				break;
			case 'gold':
				url = 'https://bitpay.com/api/rates';
				callback = this.extractGoldData;
				break;
			default:
				url = undefined;
				callback = () => {};
		}
		return this.http.get(url)
			.map(callback)
			.catch(this.handleError);
	}
}