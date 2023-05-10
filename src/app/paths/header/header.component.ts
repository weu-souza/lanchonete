import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar: boolean;

  aparecerMenu() {
    this.mudar = !this.mudar;
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
