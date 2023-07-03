import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Router} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-adicionar-promocao',
  templateUrl: './adicionar-promocao.component.html',
  styleUrls: ['./adicionar-promocao.component.scss']
})
export class AdicionarPromocaoComponent implements OnInit {

  span: HTMLElement;
  formAddProduto: FormGroup;
  promocao: Promocao;
  fotoSrc = '';
  mostrarTexto = true;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private router: Router, private currency: CurrencyPipe) {

  }

  ngOnInit(): void {
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

  imagem(event) {
    this.span = document.getElementById('span_imagem');
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        // this.formAddProduto.value.imagem = String(readerTarget.result);
        this.span.style.border = 'none';
        this.span.style.background = 'none';
        this.mostrarTexto = false;
        this.fotoSrc = String(readerTarget.result);
        this.formAddProduto.value.imageName = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }

  addPromocao() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
      this.promocao.price = Number(this.formAddProduto.value.price.replace(/[^0-9]/g, ''));
      console.log(this.promocao);
      this.produtoService.postPromocoes(this.promocao).subscribe(res => {
        alert('enviado com sucesso!');
        this.router.navigate(['promocoes']);
      });
      console.log('promoção adicionada');
    } else {
      alert('preencha o formulario!');
    }

  }
}
