import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Ingrediente, Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-ingrediente',
  templateUrl: './delete-ingrediente.component.html',
  styleUrls: ['./delete-ingrediente.component.scss']
})
export class DeleteIngredienteComponent implements OnInit {

  formAddProduto: FormGroup;
  produto: Ingrediente = {
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
    this.produtoService.getIngredienteById(this.produto.id).subscribe(res => {
      this.produto = res;
      console.log(this.produto);
      this.name = this.produto.name;
      this.price = this.produto.price;
      this.ingredients = this.produto.ingredients;
      this.fotoSrc = this.produto.imageName;
    });
  }

  deletar() {
    this.produtoService.deleteIngredientes(this.produto.id).subscribe(res => {
      alert('deletado com sucesso');
      this.router.navigate(['produtos-categorias']);
    });
  }

}
