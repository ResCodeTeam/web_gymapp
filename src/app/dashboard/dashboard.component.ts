import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { AgendaService } from '../agenda/services/agenda.service';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { AvaliacoesService } from '../avaliacoes/services/avaliacoes.service';
import { DesafiosService } from '../desafios/services/desafios.service';
import { HeaderService } from '../header/services/header.service';
import { GinasioService } from '../marca/services/ginasio.service';
import { Avaliacao } from '../models/avaliacao.model';
import { Treino } from '../models/treino.model';
import { PlanoTreinoService } from '../plano-treino/services/plano-treino.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NTreinos = 0;
  treinos: Treino;
  avaliacoes: Avaliacao;
  agendaDesafios: number;
  desafiosAgendados = []
  desafios = []
  constructor(
    private headerService: HeaderService,
    private planoTreinoService: PlanoTreinoService,
    private token: TokenStorageService,
    private avaliacoesService: AvaliacoesService,
    private agendaService: AgendaService,
    private desafioService: DesafiosService,
    private ginasioService: GinasioService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Dashboard')
    this.getNumTreinos();
    this.getAvaliacaoes();
    this.getAgendaDesafios();
    this.getAllMyGyms()
    this.getAllDesafiosAgendados()
  }


  getAvaliacaoes(): void {
    var avac = 0
    this.avaliacoesService.getAvaliacaoAutenticado().subscribe((data:Avaliacao)=> {
      avac = Object.keys(data).length;
      this.avaliacoes = data[avac - 1];
    })
  }

  getNumTreinos(): void {
    this.planoTreinoService.getTreinos().subscribe(data => {
      this.treinos = data
      const result = this.treinos.treinos.reduce((a, b) => a.data > b.data ? a : b);
      console.log(result)
      console.log("Ola")
      this.NTreinos = Object.keys(data).length - 1
    })
  }

  getAgendaDesafios(): void {
    this.agendaService.getAgendaDesafiosAlunoAutenticado().subscribe(data => {
      this.agendaDesafios = Object.keys(data).length - 1
    })
  }

  getAllDesafiosAgendados(): void {
    this.desafioService.getAllDesafiosAgendados().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.desafiosAgendados.push(data[i])
      }
    })
  }

  getAllMyGyms(): void {
    this.ginasioService.getAllMyGyms().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.desafioService.getAllDesafiosByGymID(data[i].ginasio_id).subscribe(des => {
          if (des[0] != null) {
            for (let desafi of des) {
              desafi.estado = false
              this.desafios.push(desafi)
            }
          }
        })
      }
    })
    console.log(this.desafios)
  }
}
