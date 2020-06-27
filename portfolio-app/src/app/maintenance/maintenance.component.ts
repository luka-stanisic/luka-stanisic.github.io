import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-maintenance',
	templateUrl: './maintenance.component.html',
	styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
	faCog = faCog;
	constructor() {}

	ngOnInit(): void {}
}
