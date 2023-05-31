import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  eAdm = this.authService.estaAutenticadoAdm();

  constructor(private route: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  comprar() {
    // vou mudar pra buscar pelo id quando for fazer o http
    this.route.navigate(['comprar']);
  }

  remover() {

  }

  atualizar() {

  }
}
