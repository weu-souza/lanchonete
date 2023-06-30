import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Promocao} from '../../models/produto';
import {ProdutoService} from '../../service/service_produto/produto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-alterar-promocao',
  templateUrl: './alterar-promocao.component.html',
  styleUrls: ['./alterar-promocao.component.scss']
})
export class AlterarPromocaoComponent implements OnInit {


  span: HTMLElement;
  formAddProduto: FormGroup;
  promocao: Promocao = {
    id: undefined,
    name: '',
    price: undefined,
    imageName: '',
    details: ''
  };
  fotoSrc = '';
  mostrarTexto = true;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private route: ActivatedRoute,
              private router: Router, private currency: CurrencyPipe) {

  }

  ngOnInit(): void {
    this.findById();
    this.createForm();
    this.formAddProduto.valueChanges.subscribe(form => {
      if (form.price) {
        this.formAddProduto.patchValue({
          price: this.currency.transform(form.price.toString().replace(/\D/g, '').replace(/^0/, ''), 'BRL', 'symbol', '1.0-0')
        }, {emitEvent: false});
      }
    });
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
        this.formAddProduto.value.imageName = String(readerTarget.result);

      });
      reader.readAsDataURL(file);
    }

  }

  findById() {
    this.promocao.id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.getPromocaoById(this.promocao.id).subscribe(res => {
      this.formAddProduto = this.fb.group({
        name: [res.name],
        imageName: [res.imageName],
        price: [res.price],
        details: [res.details]
      });
      this.fotoSrc = res.imageName;
    });
  }

  atualizar() {
    if (this.formAddProduto.dirty && this.formAddProduto.valid) {
      this.promocao = Object.assign({}, this.promocao, this.formAddProduto.value);
      this.produtoService.putPromocoes(this.promocao).subscribe(res => {
        alert('atualizado com sucesso');
        this.router.navigate(['promocoes']);

      }, error => {
        alert('erro no servidor');
      });
    } else {
      alert('altere o valor');
    }

  }
}
