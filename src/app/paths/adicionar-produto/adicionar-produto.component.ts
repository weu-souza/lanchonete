import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produto} from './produto';
import {ProdutoService} from './produto.service';

@Component({
  selector: 'app-contato',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {
  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Produto = new Produto();

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      nome: [this.produto.nome, [Validators.required]],
      imagem: [this.produto.imagem, [Validators.required]]
    });
  }

  texto() {
    return 'escolha uma imagem';
  }

  imagem(event) {
    this.span = document.getElementById('span_imagem') as HTMLElement;
    const inputTarget = event.target;
    const file = inputTarget.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        const img = document.createElement('img');
        img.src = String(readerTarget.result);
        img.classList.add('img');
        this.span.innerHTML = '';
        this.span.style.border = 'none';
        this.span.style.background = 'none';
        this.span.appendChild(img);
        this.formAddProduto.value.imagem = String(readerTarget.result);
      });
      reader.readAsDataURL(file);

    } else {
      this.span.innerHTML = this.texto();
    }

  }

  enviar() {

    console.log('enviar', this.formAddProduto.value);
  }

  atualizar() {
    console.log('atualizar', this.formAddProduto.value);
  }
}
