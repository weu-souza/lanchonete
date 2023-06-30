import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-alterar-ingrediente',
  templateUrl: './alterar-ingrediente.component.html',
  styleUrls: ['./alterar-ingrediente.component.scss']
})
export class AlterarIngredienteComponent implements OnInit {


  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Ingrediente = new Ingrediente();
  produtos: Produto[];
  fotoSrc = '';
  mostrarTexto = true;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private currency: CurrencyPipe) {

  }

  ngOnInit(): void {
    this.createForm();
    this.formAddProduto.valueChanges.subscribe(form => {
      if (form.preco) {
        this.formAddProduto.patchValue({
          preco: this.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
        }, {emitEvent: false});
      }
    });
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      nome: ['', [Validators.required]],
      imagem: ['', [Validators.required]],
      preco: ['', [Validators.required, Validators.min(1)]],
      ingredientes: ['', [Validators.required]]
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
        this.formAddProduto.value.imagem = String(readerTarget.result);
        this.span.style.border = 'none';
        this.span.style.background = 'none';
        this.mostrarTexto = false;
        this.fotoSrc = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }
  }

  atualizarPromocao() {

  }

  atualizarProduto() {

  }

}
