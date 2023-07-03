import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';
import {Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Observable} from 'rxjs';
import {Carrinho} from '../../models/carrinho';

@Component({
  selector: 'app-adicionar-carrinh-prmocao',
  templateUrl: './adicionar-carrinh-prmocao.component.html',
  styleUrls: ['./adicionar-carrinh-prmocao.component.scss']
})
export class AdicionarCarrinhPrmocaoComponent implements OnInit {
  promocao: Promocao | null = {id: undefined, ingredients: '', price: undefined, imageName: '', name: ''};
  carrinho: Carrinho;
  promocao$: Observable<Promocao>;

  constructor(private route: ActivatedRoute, private carrinhoService: CarrinhoService,
              private produtoService: ProdutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.promocao.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();
    this.promocao$.subscribe(res => {
      this.carrinho = res;
    });
  }

  findById() {
    this.promocao$ = this.produtoService.getPromocaoById(this.promocao.id);
  }

  comprar() {
    this.carrinhoService.postCarrinhoP(this.carrinho, this.promocao.id).subscribe(() => {
      alert('enviado com sucesso!');
      this.router.navigate(['comprar']);
    });
  }
}
