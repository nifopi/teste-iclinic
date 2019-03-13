import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dados = [
    { pergunta: "Quantos filmes a série Harry Potter tem?", resposta: '7', cor: 't', set: 1 },
    { pergunta: "Nome do ator que atua como Harry Potter?", resposta: "Daniel Radcliffe", cor: 't', set: 0 },
    { pergunta: "Qual era o nome do animal de estimação do Harry Potter ?", resposta: "Edwiges", cor: 't', set: 0 },
    { pergunta: "Como são chamados as pessoas que não são bruxos?", resposta: "Trouxas", cor: 't', set: 0 },
    { pergunta: "Nome da namorada de Harry Potter?", resposta: "Gina Weasley", cor: 't', set: 0 },
  ]
  perguntas: any
  btn = false
  acerto
  constructor(public navCtrl: NavController) {}
  ngOnInit() {
    this.perguntas = this.dados
  }
  resposta(r, i) {
    if (r[i] === null) { } else {
      if (this.perguntas[i].resposta.toLowerCase() === r[i].toLowerCase() === true) {
        if (i + 1 === this.perguntas.length) { this.btn = true } else { this.perguntas[i + 1].set = 1 }
        this.perguntas[i].cor = 'c'
        this.acerto=this.perguntas.filter(e=>{return e.cor==='c'}).length
        
      } else {
        if (i + 1 === this.perguntas.length) { this.btn = true } else { this.perguntas[i + 1].set = 1 }
        this.perguntas[i].cor = 'e'
      }
    }
  }
  jogar() {
    this.perguntas=[]
    this.perguntas =  [
      { pergunta: "Quantos filmes a série Harry Potter tem?", resposta: '7', cor: 't', set: 1 },
      { pergunta: "Nome do ator que atua como Harry Potter?", resposta: "Daniel Radcliffe", cor: 't', set: 0 },
      { pergunta: "Qual era o nome do animal de estimação do Harry Potter ?", resposta: "Edwiges", cor: 't', set: 0 },
      { pergunta: "Como são chamados as pessoas que não são bruxos?", resposta: "Trouxas", cor: 't', set: 0 },
      { pergunta: "Nome da namorada de Harry Potter?", resposta: "Gina Weasley", cor: 't', set: 0 },
    ]
    this.btn = false
    this.acerto=0
  }
}
