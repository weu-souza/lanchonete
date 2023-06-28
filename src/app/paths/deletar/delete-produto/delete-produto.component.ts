import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Produto} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.scss']
})
export class DeleteProdutoComponent implements OnInit {

  span: HTMLElement;
  formAddProduto: FormGroup;
  produto: Produto = {
    id: undefined,
    name: '',
    imageName: ''
  };
  fotoSrc = '';
  mostrarTexto = true;
  name: any;
  imageName: any;


  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.produto.id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById();

  }

  findById() {
    this.produtoService.getProdutoById(this.produto.id).subscribe(res => {
      this.produto = res;
      this.fotoSrc = this.produto.imageName;
      this.name = this.produto.name;
    });
  }

  deletar() {
    this.produtoService.deleteProdutoLista(this.produto.id).subscribe(res => {
      alert('deletado com sucesso');
      this.router.navigate(['produtos-categorias']);
    }, error => {
      alert('não deletado');
    });
  }
}
