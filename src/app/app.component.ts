import {Component} from '@angular/core';
import {AuthService} from './paths/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrarMenu = false;
  title = 'lanchonete';

  constructor(private authService: AuthService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
