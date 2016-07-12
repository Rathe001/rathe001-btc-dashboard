import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';

@Injectable()
export class ConfigService {
	getAppConfig(){
		return APP_CONFIG;
	}
}