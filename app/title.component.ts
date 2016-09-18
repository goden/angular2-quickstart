import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: 'title.component.html',
	moduleId: module.id
})

export class TitleComponent {
	@Input() subtitle = '';
	title = 'Angular Modules';
}