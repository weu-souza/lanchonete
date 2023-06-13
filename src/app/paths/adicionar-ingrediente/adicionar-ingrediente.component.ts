import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingrediente, Produto} from '../classe/produto';
import {ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.scss']
})
export class AdicionarIngredienteComponent implements OnInit {

  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Ingrediente;
  produtos: Produto[];


  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      nome: [this.produto.nome, [Validators.required]],
      imagem: [this.produto.imagem, [Validators.required]],
      preco: [this.produto.preco, [Validators.required, Validators.min(1)]],
      ingredientes: [this.produto.ingrediente, [Validators.required]]
    });
  }

  texto() {
    return 'escolha uma imagem';
  }

  imagem(event) {
    this.span = document.getElementById('span_imagem');
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


  addProduto() {
    this.produtoService.postProduto(this.formAddProduto.value);
    console.log('produto adicionada');
  }

  addPromocao() {
    this.produtoService.postPromocoes(this.formAddProduto.value);
    console.log('promoção adicionada');
  }

  atualizarPromocao() {

  }

  atualizarProduto() {

  }
}
