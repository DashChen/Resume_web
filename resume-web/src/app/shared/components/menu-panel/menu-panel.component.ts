import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { link } from '@app/core/interfaces/menu.model';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {
  @ViewChild("menu", { static: true })
  menu!: MatMenu;
  @Input()
  items: link[] = [];
  @Input()
  class: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
