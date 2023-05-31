import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.scss']
})
export class AdicionarIngredienteComponent implements OnInit {

  span: HTMLElement;

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
      });
      reader.readAsDataURL(file);
    } else {
      this.span.innerHTML = this.texto();
    }

  }

  constructor() {

  }

  ngOnInit(): void {
  }

  addProduto() {
    console.log('produto adicionada');
  }

  addPromocao() {
    console.log('promoção adicionada');
  }

  atualizarPromocao() {

  }

  atualizarProduto() {

  }
}
