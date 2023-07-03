import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-promocao',
  templateUrl: './delete-promocao.component.html',
  styleUrls: ['./delete-promocao.component.scss']
})
export class DeletePromocaoComponent implements OnInit {
  formAddProduto: FormGroup;
  produto: Promocao = {
    id: undefined,
    name: '',
    price: undefined,
    ingredients: '',
    imageName: ''
  };
  fotoSrc = '';
  name: string;
  price: number;
  ingredients: string;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();
  }

  findById() {
    this.produtoService.getPromocaoById(this.produto.id).subscribe(res => {
      this.produto = res;
      this.name = this.produto.name;
      this.price = this.produto.price;
      this.ingredients = this.produto.ingredients;
      this.fotoSrc = this.produto.imageName;
    });
  }

  deletar() {
    this.produtoService.deletePromocoes(this.produto.id).subscribe(res => {
      alert('deletado');
      this.router.navigate(['promocoes']);
    }, error => {
      alert('houve um erro no servidor');
    });
  }
}
