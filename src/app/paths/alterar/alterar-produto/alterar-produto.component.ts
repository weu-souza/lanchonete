import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.scss']
})
export class AlterarProdutoComponent implements OnInit {
  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Produto = new Produto();
  fotoSrc = '';
  mostrarTexto = true;

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
        this.mostrarTexto = false;
        this.fotoSrc = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }

  findById() {

  }

  atualizar() {
    console.log('atualizar', this.formAddProduto.value);
  }
}
