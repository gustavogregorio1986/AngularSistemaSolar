import { Component } from '@angular/core';
import { ConteudoComponent } from "../conteudo/conteudo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ConteudoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    jupter = 'https://filesedc.com/uploads/333/img/2020/07/1200/jupiter-es-el-planeta-mas-grande-del-sistema-solar-5f0889b20a817.jpg'
    altText = 'planeta jupiter';

    saturno = 'https://tse3.mm.bing.net/th?id=OIP.VlubztpXBOyc4x6mTgKlJgHaC6&pid=Api&P=0&h=180'
    altSaturno = 'planeta jupteer';
}
