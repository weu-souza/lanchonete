import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';
import {Usuario} from '../login/usuario';
import {AuthGuard} from '../login/auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar = false;
  eAdm = true;

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


  constructor(private route: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  sair() {
    alert('saindo...');
    this.authService.logout();
    this.route.navigate(['login']);
  }
}
