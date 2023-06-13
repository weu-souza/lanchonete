import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Usuario} from '../classe/usuario';
import {AuthGuard} from '../guard/auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mudar = false;
  eAdm = this.authService.estaAutenticadoAdm();


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
    this.authService.mostrarMenu.subscribe(
      mostrar => this.eAdm = mostrar
    );
  }


  sair() {
    alert('saindo...');
    this.authService.logout();
    this.route.navigate(['login']);
  }

  sumirMenu() {
    const btn: HTMLElement = document.getElementById('btn-mobile') as HTMLElement;
    if (this.mudar) {
      btn.innerHTML = '<i class="fa-solid fa-bars p-1"></i>';
      this.mudar = false;
    }
  }

}
