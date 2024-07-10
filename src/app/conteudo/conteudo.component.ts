import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {

  sol = 'http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/08/interior_del_sol/17098379-2-eng-GB/Interior_del_Sol_pillars.jpg'
  altSol = 'imagem do sol'

  solar ='https://significado.com/img/ciencia/Sistema-Solar-planetas-sol.jpg'
  altSolar = 'sistema solar'

  diferenteSistema = 'https://tse2.mm.bing.net/th?id=OIP.b75FBjKQi7KzLrpQB4rU-wHaFe&pid=Api&P=0&h=180'
  altSistemaSolar = 'sistema solar '
}
