import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth:number;
  collapsed: boolean;
}
@Component({
  selector: 'toolbar-basic-example',
  templateUrl: 'toolbar-basic-example.html',
  styleUrls: ['toolbar-basic-example.css'],
})
export class ToolbarBasicExample {
    title = 'sidenav'; 

    isSideNavCollapsed = false;
    screenWidth = 0;

    onToggleSideNav(data: SideNavToggle): void {
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
    }
}
