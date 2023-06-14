import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto, Promocao} from '../models/produto';
import {ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.scss']
})
export class AdicionarIngredienteComponent implements OnInit {

  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Ingrediente = new Ingrediente();
  promocao: Promocao;
  produtos: Produto[];
  fotoSrc = '';

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.createForm();
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
        this.fotoSrc = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }


  addProduto() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
      this.produtoService.postProduto(this.produto);
      console.log('produto adicionada', this.produto);
    } else {
      alert('preencha o formulario!');
    }

  }

  addPromocao() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
      this.produtoService.postPromocoes(this.promocao);
      console.log('promoção adicionada');
    } else {
      alert('preencha o formulario!');
    }

  }

  atualizarPromocao() {

  }

  atualizarProduto() {

  }
}
