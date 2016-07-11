import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
	selector: 'detail',
	templateUrl: 'src/app/components/detail/detail.component.html'
})

export class DetailComponent {
	@Input()
  	hero: Hero;
}