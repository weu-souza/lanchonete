import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produto} from '../models/produto';
import {ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-contato',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {
  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Produto = new Produto();
  fotoSrc = '';

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      nome: ['', [Validators.required]],
      imagem: ['', [Validators.required]]
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

  enviar() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
      this.produtoService.postProdutoLista(this.produto);
    } else {
      alert('preencha o formulario!');
    }


  }

  atualizar() {
    console.log('atualizar', this.formAddProduto.value);
  }
}
