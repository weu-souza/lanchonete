import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar = false;


  aparecerMenu() {
    const btn: HTMLElement = document.getElementById('btn-mobile') as HTMLElement;
    if (!this.mudar) {
      btn.innerHTML = '<i class="fa-solid fa-xmark p-1" ></i>';
      this.mudar = true;
    } else {
      btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
      this.mudar = false;
    }
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
