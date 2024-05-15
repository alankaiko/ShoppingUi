import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'faixa-titulo-botao',
  templateUrl: './faixa-titulo-botao.component.html',
  styleUrls: ['./faixa-titulo-botao.component.css']
})
export class FaixaTituloBotaoComponent implements OnInit {
  @Input() titulo: string = 'Não informado';

  @Input() flexaoGenero: string = 'a';
  @Input() addNovo: boolean;
  @Input() tituloNovo: string = '';
  @Input() iconeNovo: string = '';
  @Output() onNovo: EventEmitter<void>  = new EventEmitter<void>();

  @Input() addAgenda: boolean;
  @Input() tituloAgenda: string = '';
  @Input() iconeAgenda: string = '';
  @Output() onAgenda: EventEmitter<void>  = new EventEmitter<void>();

  @Input() addHome: boolean;
  @Input() tituloHome: string = '';
  @Input() iconeHome: string = '';
  @Output() onHome: EventEmitter<void>  = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
