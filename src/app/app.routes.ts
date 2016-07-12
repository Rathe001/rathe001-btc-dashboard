import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: RouterConfig = [
	{
		path: 'heroes',
		component: HeroesComponent
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