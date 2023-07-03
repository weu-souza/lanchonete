import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {Router} from '@angular/router';


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
  mostrarTexto = true;


  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      name: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
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

  enviar() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
      console.log(this.produto);
      this.produtoService.postProdutoLista(this.produto).subscribe(res => {
        alert('enviado com sucesso!');
        this.router.navigate(['produtos-categorias']);
      }, error => {
        alert('só e possivel enviar um nome e uma foto em categoria');
      });
    } else {
      alert('preencha o formulario!');
    }


  }

  atualizar() {
    console.log('atualizar', this.formAddProduto.value);
  }
}
