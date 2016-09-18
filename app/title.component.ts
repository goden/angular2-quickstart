import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
	selector: 'app-title',
	templateUrl: 'title.component.html',
	moduleId: module.id
})

export class TitleComponent {

	constructor(userService: UserService) {
		this.user = userService.userName;
	}

	@Input() subtitle = '';
	title = 'Angular Modules';
	user = '';
}