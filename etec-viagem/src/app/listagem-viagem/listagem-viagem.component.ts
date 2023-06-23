import { Component } from '@angular/core';
import { DetalhesViagemComponent } from '../detalhes-viagem/detalhes-viagem.component';

@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent {

  viagens = [
    {"destino":"Singapura", "tipo": "LAZER", "Data De Chegada":"18/06/2023", " Data De Saida":"17/06/2023", "Valor da passagem":"2.000,00", "Quantidade de passageiros":"2"},
    {"destino":"Catarata do Niaguara", "tipo": "Estudos", "Data De Chegada":"21/06/2023", " Data De Saida":"20/06/2023", "Valor da passagem":"6.000,00", "Quantidade de passageiros":"1"}
    {"destino":"França", "tipo": "LAZER", "Data De Chegada":"13/07/2023", " Data De Saida":"15/06/2023", "Valor da passagem":"12.000,00", "Quantidade de passageiros":"4"}
    {"destino":"Patagonia", "tipo": "LAZER", "Data De Chegada":"03/08/2023", " Data De Saida":"14/06/2023", "Valor da passagem":"5.000,00", "Quantidade de passageiros":"3"}
  ];
}
