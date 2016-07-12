import { provideRouter, RouterConfig }  from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: RouterConfig = [
	{
		path: 'accounts',
		component: AccountsComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: DetailComponent
	},
	{
		path: '',
		redirectTo: '/dashboard'
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];