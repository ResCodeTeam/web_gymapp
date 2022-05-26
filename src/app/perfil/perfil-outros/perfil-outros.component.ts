import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-outros',
  templateUrl: './perfil-outros.component.html',
  styleUrls: ['./perfil-outros.component.css']
})
export class PerfilOutrosComponent implements OnInit {

  userInfo: any;
  modalInfo: any;

  constructor(
    private perfilService: PerfilService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.perfilService.getPerfilOutros(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.userInfo = data

      console.log(data)
    })
  }

  modalPub(pub: any) {
    this.modalInfo = pub
  }


}
