import {Component, OnInit} from '@angular/core';
import {Ingrediente, Promocao} from '../../models/produto';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CarrinhoService} from '../../service/service_carrinho/carrinho.service';
import {ProdutoService} from '../../service/service_produto/produto.service';

@Component({
  selector: 'app-adicionar-carrinh-produto',
  templateUrl: './adicionar-carrinh-produto.component.html',
  styleUrls: ['./adicionar-carrinh-produto.component.scss']
})
export class AdicionarCarrinhProdutoComponent implements OnInit {

  produto: Ingrediente | null = {id: undefined, ingredients: '', price: undefined, imageName: '', name: ''};
  produto$: Observable<Ingrediente>;

  constructor(private route: ActivatedRoute, private carrinhoService: CarrinhoService,
              private produtoService: ProdutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();

    this.produto$.subscribe(res => {
      this.produto = res;
    });
  }

  findById() {
    this.produto$ = this.produtoService.getIngredienteById(this.produto.id);
  }

  comprar() {
    this.carrinhoService.adicionarAoCarrinho(this.produto).subscribe(res => {
      this.router.navigate(['/produtos-categorias']);
      alert('enviado com sucesso!');
    }, error => {
      alert('erro no servidor');
    });


  }

}
