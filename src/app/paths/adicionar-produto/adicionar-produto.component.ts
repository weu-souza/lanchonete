import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {
  span: HTMLElement;

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

}
