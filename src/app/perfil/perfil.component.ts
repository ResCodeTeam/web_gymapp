import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post/services/posts.service';
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
  comentario = ''
  pubcomment: string
  emptyArray = []

  constructor(
    private perfilService: PerfilService,
    private treinosService: TreinosService,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => {
      this.userInfo = data
    })
    this.treinosService.getTreinos().subscribe(data => {
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.userTreinos.push(data[i])
       
      }
    })
  }


  modalPub(pubId: string) {
    this.postService.getInfoOfPost(pubId).subscribe(data => {
      this.modalInfo = data
      console.log(data)
    })
  }

  commentPost(postId: string): void {
    var comment = {
      postId: postId,
      comentario: this.pubcomment,
      identificacao: this.emptyArray
    }

    this.postService.comentPost(comment).subscribe(data => {
      this.perfilService.getPerfil().subscribe(user => {
        var com = {
          users: {
            nome: user.perfil.nome,
            uid: user.perfil.uid,
            imagem_url: user.perfil.imagem_url
          },
          comentario: this.pubcomment
        }
        this.modalInfo.comentarios_publicacao.push(com)
      })
    }, err => {
      console.log(err)
    })
  }

  likePost(pubId: string) {
    const data = {
      postId: pubId
    }
    this.postService.likePost(data).subscribe(data => {
      this.modalInfo._count.gostos_publicacao += 1
    })
  }

}
