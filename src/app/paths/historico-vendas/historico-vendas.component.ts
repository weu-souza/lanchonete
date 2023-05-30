import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-vendas',
  templateUrl: './historico-vendas.component.html',
  styleUrls: ['./historico-vendas.component.scss']
})
export class HistoricoVendasComponent implements OnInit {
  total = 20;
  preco = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
