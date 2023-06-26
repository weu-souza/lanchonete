import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login.component';
import {AuthService} from '../../service/service_login/auth.service';

@Component({
  selector: 'app-nao-logado',
  templateUrl: './nao-logado.component.html',
  styleUrls: ['./nao-logado.component.scss']
})
export class NaoLogadoComponent implements OnInit {


  constructor(loginService: AuthService) {
  }

  ngOnInit(): void {
  }
}
