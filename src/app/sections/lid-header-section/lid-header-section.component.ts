import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lid-header-section',
  templateUrl: './lid-header-section.component.html'
})
export class LidHeaderSectionComponent implements OnInit {

  @Input() title: string;
  @Input() buttonTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
