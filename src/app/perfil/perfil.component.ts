import { Component, OnInit } from '@angular/core';
import { PerfilService } from './services/perfil.service';
import { TreinosService } from './services/treinos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userInfo: any;
  userTreinos = [];
  modalInfo: any;

  constructor(
    private perfilService: PerfilService,
    private treinosService: TreinosService
  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => {
      this.userInfo = data
      console.log(data)
    })

    this.treinosService.getTreinos().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.userTreinos.push(data[i])
       
      }
      console.log(this.userTreinos)
    })
  }


  modalPub(pub: any) {
    this.modalInfo = pub

    console.log(this.modalInfo)
  }

}
