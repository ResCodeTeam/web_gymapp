import { Component, OnInit } from '@angular/core';
import { GinasioService } from '../marca/services/ginasio.service';
import { Ginasio } from '../models/ginasio.model';
import { DesafiosService } from './services/desafios.service';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {

  constructor(
    private ginasioService: GinasioService,
    private desafioService: DesafiosService
  ) { }
  selected = 0;
  myGyms: Ginasio
  desafios = []
  desafiosAgendados = []
  ngOnInit(): void {
    this.getAllMyGyms()
    this.getAllDesafiosAgendados()
    console.log(this.selected)

  }

  getAllMyGyms(): void {
    this.ginasioService.getAllMyGyms().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        console.log(data)
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

  cancelAgendamento(agendamentoId: string): void {
    this.desafioService.removeDesafioAgendado(agendamentoId).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }

  inscreverDesafio():void {

  }
  getAllDesafiosAgendados(): void {
    this.desafioService.getAllDesafiosAgendados().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.desafiosAgendados.push(data[i])
      }
    })

    console.log(this.desafiosAgendados)
  }
}
