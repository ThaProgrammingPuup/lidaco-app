import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lid-navigation-section',
  templateUrl: './lid-navigation-section.component.html'
})
export class LidNavigationSectionComponent implements OnInit {

  assetPath = environment.assetsPath;
  checked = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * uncheck
   */
  public uncheck() {
    this.checked = false;
  }

}
