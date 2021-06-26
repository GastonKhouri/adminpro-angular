import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public colors: Color[] = [
  	{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

  @Input() title: string = 'Sin título';
  @Input() labels: Label[] = ['Sin label', 'Sin label', 'Sin label'];
  @Input() data: MultiDataSet = [[1, 1, 1]];

}
