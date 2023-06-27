import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto, Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';

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

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      name: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      details: ['', [Validators.required]]
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

      });
      reader.readAsDataURL(file);
    }

  }

  addPromocao() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
      this.produtoService.postPromocoes(this.promocao).subscribe(res => {
        alert('enviado com sucesso!');
      });
      console.log('promoção adicionada');
    } else {
      alert('preencha o formulario!');
    }

  }
}
