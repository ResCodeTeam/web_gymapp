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

  myGyms: Ginasio
  desafios = []
  ngOnInit(): void {
    this.getAllMyGyms()

  }

  getAllMyGyms(): void {
    this.ginasioService.getAllMyGyms().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.desafioService.getAllDesafiosByGymID(data[i].ginasio_id).subscribe(des => {
          if (des[0] != null) {
            for (let desafi of des) {
              this.desafios.push(desafi)
            }
          }
        })
      }
    })
    console.log(this.desafios)
  }
}
