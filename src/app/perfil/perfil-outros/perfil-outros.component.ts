import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/post/services/posts.service';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-outros',
  templateUrl: './perfil-outros.component.html',
  styleUrls: ['./perfil-outros.component.css']
})
export class PerfilOutrosComponent implements OnInit {

  
  userInfo: any;
  userTreinos = [];
  modalInfo: any;
  comentario = ''
  pubcomment: string
  emptyArray = []

  constructor(
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.perfilService.getPerfilOutros(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.userInfo = data

      console.log(data)
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
