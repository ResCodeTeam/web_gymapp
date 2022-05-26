import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilOutrosComponent } from './perfil/perfil-outros/perfil-outros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CompararAvaliacaoFisicaComponent } from './aluno/comparar-avaliacao-fisica/comparar-avaliacao-fisica.component';
import { VerAvaliacaoFisicaComponent } from './treinador/ver-avaliacao-fisica/ver-avaliacao-fisica.component';
import { DashboardTreinadorComponent } from './treinador/dashboard-treinador/dashboard-treinador.component';
import { VerAvaliacoesDiasComponent } from './aluno/ver-avaliacoes-dias/ver-avaliacoes-dias.component';
import { VerPublicacaoComponent } from './ver-publicacao/ver-publicacao.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';


import { CriarAvaliacaoFisicaComponent } from './treinador/criar-avaliacao-fisica/criar-avaliacao-fisica.component';
import { GestaoExercicioComponent } from './treinador/gestao-exercicio/gestao-exercicio.component';
import { CalendarioDesafioAvaliacaoComponent } from './calendario-desafio-avaliacao/calendario-desafio-avaliacao.component';
import { EcraAlunosComponent } from './treinador/ecra-alunos/ecra-alunos.component';

import { PostComponent } from './post/post.component';

import { AgendarAvaliacaoComponentComponent } from './aluno/agendar-avaliacao-component/agendar-avaliacao-component.component';
import { RoleGuardService } from './auth/services/role-guard.service';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { DesafiosComponent } from './desafios/desafios.component';


//Rotas para paginas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService] },
  { path: 'perfil/:id', component: PerfilOutrosComponent, canActivate: [AuthGuardService]},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Aluno'
    }
  },
  { path: 'desafios', component: DesafiosComponent },
  { path: 'dashboardTreinador', component: DashboardTreinadorComponent },
  { path: 'verPublicacao', component: VerPublicacaoComponent },
  { path: 'post', component: PostComponent },
  { path: 'treinador/verAvaliacao', component: VerAvaliacaoFisicaComponent },
  { path: 'aluno/compararAvaliacao', component: CompararAvaliacaoFisicaComponent },
  { path: 'dashboardTreinador', component: DashboardTreinadorComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
  { path: 'aluno/verAvaliacaoDias', component: VerAvaliacoesDiasComponent },
  { path: 'treinador/criarAvaliacao', component: CriarAvaliacaoFisicaComponent },
  { path: 'dashboardTreinador', component: DashboardTreinadorComponent },
  { path: 'treinador/gestaoExercicio', component: GestaoExercicioComponent },
  { path: 'calendarioDesafioAvaliacao', component: CalendarioDesafioAvaliacaoComponent },
  { path: 'treinador/gestaoExercicio', component: GestaoExercicioComponent },
  { path: 'treinador/alunos', component: EcraAlunosComponent },
  { path: 'aluno/agendarAvaliacao', component: AgendarAvaliacaoComponentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
