import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

	progreso1: number = 25;
	progreso2: number = 75;

	get getProgreso1() {
		return `${ this.progreso1 }%`
	}

	get getProgreso2() {
		return `${ this.progreso2 }%`
	}

	setProgreso1(valor: number) {
		this.progreso1 = valor
	}

	setProgreso2(valor: number) {
		this.progreso2 = valor
	}

}
