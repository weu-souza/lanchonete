import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {CurrencyPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alterar-ingrediente',
  templateUrl: './alterar-ingrediente.component.html',
  styleUrls: ['./alterar-ingrediente.component.scss']
})
export class AlterarIngredienteComponent implements OnInit {
  formAddProduto: FormGroup;
  produtos: Ingrediente = {
    id: undefined,
    name: '',
    price: undefined,
    imageName: '',
    ingredients: ''
  };
  fotoSrc = '';
  mostrarTexto = true;
  prodName: Produto = {
    name: '',
    imageName: '',
    id: undefined,
  };

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private route: ActivatedRoute,
              private router: Router, private currency: CurrencyPipe) {

  }

  ngOnInit(): void {
    this.findById();
    this.createForm();
    this.formAddProduto.valueChanges.subscribe(form => {
      if (form.price) {
        this.formAddProduto.patchValue({
          price: this.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
        }, {emitEvent: false});
      }
    });
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      name: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      ingredients: ['', [Validators.required]]
    });
  }

  imagem(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        // this.formAddProduto.value.imagem = String(readerTarget.result);
        this.mostrarTexto = false;
        this.fotoSrc = String(readerTarget.result);
        this.formAddProduto.value.imageName = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }

  findById() {
    this.produtos.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prodName.name = this.route.snapshot.paramMap.get('name');
    this.produtoService.getIngredienteById(this.produtos.id).subscribe(res => {
      this.formAddProduto = this.fb.group({
        name: [res.name],
        imageName: [res.imageName],
        price: [res.price],
        ingredients: [res.ingredients]
      });
      this.fotoSrc = res.imageName;
    });
  }

  atualizar() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produtos = Object.assign({}, this.produtos, this.formAddProduto.value);
      this.produtoService.putProdutos(this.produtos).subscribe(res => {
        alert('atualizado com sucesso');
        this.router.navigate(['produtos-categorias']);

      }, error => {
        alert('erro no servidor');
      });
    } else {
      alert('altere o valor');
    }

  }
}
