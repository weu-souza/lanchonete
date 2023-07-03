import {Component, OnInit} from '@angular/core';
import {Ingrediente, Promocao} from '../../models/produto';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Carrinho} from '../../models/carrinho';

@Component({
  selector: 'app-adicionar-carrinh-produto',
  templateUrl: './adicionar-carrinh-produto.component.html',
  styleUrls: ['./adicionar-carrinh-produto.component.scss']
})
export class AdicionarCarrinhProdutoComponent implements OnInit {
  carrinho: Carrinho;
  produto: Ingrediente = {
    id: undefined, imageName: '', name: '', price: undefined, ingredients: ''
  };
  produto$: Observable<Ingrediente>;

  constructor(private route: ActivatedRoute, private carrinhoService: CarrinhoService,
              private produtoService: ProdutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();
    this.produto$.subscribe(res => {
        this.carrinho = res;
      }
    );
  }

  findById() {
    this.produto$ = this.produtoService.getIngredienteById(this.produto.id);
  }

  comprar() {
    this.carrinhoService.postCarrinho(this.carrinho, this.produto.id).subscribe(() => {
      alert('enviado com sucesso!');
      this.router.navigate(['comprar']);
    });
  }

}
