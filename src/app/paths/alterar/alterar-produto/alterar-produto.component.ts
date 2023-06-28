import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.scss']
})
export class AlterarProdutoComponent implements OnInit {
  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Produto = {
    id: undefined,
    name: '',
    imageName: ''
  };
  fotoSrc = '';

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
    this.findById();
  }

  createForm() {
    this.formAddProduto = this.fb.group({
      name: ['', [Validators.required]],
      imagemName: ['', [Validators.required]]
    });
  }

  imagem(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
        this.fotoSrc = String(readerTarget.result);
        this.formAddProduto.value.imageName = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }

  findById() {
    this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.getProdutoById(this.produto.id).subscribe(res => {
      this.formAddProduto = this.fb.group({
        name: [res.name],
        imageName: [res.imageName]
      });
      this.fotoSrc = res.imageName;
    });
  }

  atualizar() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.produto = Object.assign({}, this.produto, this.formAddProduto.value);
      this.produtoService.putProdutosLista(this.produto).subscribe(res => {
        alert('atualizado com sucesso');
        this.router.navigate(['produtos-categorias']);

      }, error => {
        alert('erro no servidor');
      });
    } else {
      alert('altere o valor');
    }

  }
}
