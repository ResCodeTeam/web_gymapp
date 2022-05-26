import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesafiosService } from '../services/desafios.service';

import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { GinasioService } from 'src/app/marca/services/ginasio.service';

export function flatpickrFactory() {
  flatpickr.localize(Portuguese);
  return flatpickr;
}

@Component({
  selector: 'app-inscrever-desafios',
  templateUrl: './inscrever-desafios.component.html',
  styleUrls: ['./inscrever-desafios.component.css']
})
export class InscreverDesafiosComponent implements OnInit {

  desafioInfo: any;
  dateTimeValue: Date = new Date()
  ginasios : any
  selectedGinasio : any
  sucesso = false
  
  getDate = new Date();
  dd = String(this.getDate.getDate()).padStart(2, '0');
  mm = String(this.getDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.getDate.getFullYear();

  today = this.yyyy + '-' + this.mm + '-' + this.dd;

  constructor(
    private desafioService: DesafiosService,
    private ginasiosService: GinasioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  
    this.getAllGyms()
    flatpickrFactory();

    this.desafioService.getDesafioInfo(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.desafioInfo = data
      console.log(data)
    })
  }

  getAllGyms(){
    this.ginasiosService.getAllMyGyms().subscribe(data => {
      this.ginasios = data;
      console.log(data)
    })
  }

  agendarDesafio(): any {
    var data = {
      desafioId: this.route.snapshot.paramMap.get('id'),
      ginasioId: this.selectedGinasio,
      dataAgendamento: this.dateTimeValue
    }
    console.log(data)
    this.desafioService.postAgendamentoDeDesafio(data).subscribe(sub => {
      this.sucesso = true
    })
  }

}
