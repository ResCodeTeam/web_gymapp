import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PerfilService } from '../perfil/services/perfil.service';
import { PostsService } from './services/posts.service';

declare const $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  posts: Post
  emptyArray = []
  arrayPosts = []
  comentario = ''
  pubcomment: string
  constructor(
    private postService: PostsService,
    private perfilService: PerfilService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  commentPost(postId: string, i: number): void {
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
        this.arrayPosts[i].comentarios_publicacao.push(com)
      })
    }, err => {
      console.log(err)
    })
  }

  likePost(pubId: string, i: number) {
    const data = {
      postId: pubId
    }
    this.postService.likePost(data).subscribe(data => {
      this.arrayPosts[i]._count.gostos_publicacao += 1
    })
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(data => {
      let nomeCriador = ""
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.postService.getInfoOfPost(data[i].publicacao_id).subscribe(infoPost => {
          if (!isEmpty(infoPost)) {
            this.perfilService.getPerfilOutros(infoPost.criador_id).subscribe(criador => {
              infoPost.criador_nome = criador.perfil[0].nome
              this.arrayPosts.push(infoPost)
            })
            console.log(infoPost)
          }
        })
      }
    })
  }
  ngAfterViewInit(): void {
    $('#carouselExampleControls').carousel()
  }
}

function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}