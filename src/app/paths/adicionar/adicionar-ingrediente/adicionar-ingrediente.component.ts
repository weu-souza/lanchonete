import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {CurrencyPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.scss']
})
export class AdicionarIngredienteComponent implements OnInit {

  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Ingrediente;
  produtos: Produto = {
    name: '',
    imageName: '',
    id: undefined
  };
  fotoSrc = '';
  mostrarTexto = true;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private currency: CurrencyPipe,
              private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.createForm();
    this.produtos.name = this.route.snapshot.paramMap.get('name');
    this.formAddProduto = this.fb.group({
      name: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      ingredients: ['', [Validators.required]]
    });
    this.formatPrice();
  }

  formatPrice() {
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
    this.span = document.getElementById('span_imagem');
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        this.span.style.border = 'none';
        this.span.style.background = 'none';
        this.mostrarTexto = false;
        this.fotoSrc = String(readerTarget.result);
        this.formAddProduto.value.imageName = String(readerTarget.result);
      });
      reader.readAsDataURL(file);
    }

  }

  addProduto() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
      this.produto.price = Number(this.formAddProduto.value.price.replace(/[^0-9]/g, ''));
      console.log(this.produtos.name);
      this.produtoService.postProduto(this.produto, this.produtos.name).subscribe(res => {
        this.router.navigate(['/']);
        alert('enviado com sucesso!');
      });
      console.log('produto adicionada', this.produto);
    } else {
      alert('preencha o formulario!');
    }

  }

}
