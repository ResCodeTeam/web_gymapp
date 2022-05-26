import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LOCALE_ID } from '@angular/core';
import ptPT from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilOutrosComponent } from './perfil/perfil-outros/perfil-outros.component';
import { VerAvaliacaoFisicaComponent } from './treinador/ver-avaliacao-fisica/ver-avaliacao-fisica.component';
import { IdentificacaoAlunoAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/identificacao-aluno-avaliacao/identificacao-aluno-avaliacao.component';
import { DadosAlunoAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/dados-aluno-avaliacao/dados-aluno-avaliacao.component';
import { ButaoEditarAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/butao-editar-avaliacao/butao-editar-avaliacao.component';
import { MedidasVerAvaliacaoComponent } from './treinador/ver-avaliacao-fisica/medidas-ver-avaliacao/medidas-ver-avaliacao.component';
import { CompararAvaliacaoFisicaComponent } from './aluno/comparar-avaliacao-fisica/comparar-avaliacao-fisica.component';
import { MedidasCompararAvaliacaoComponent } from './aluno/comparar-avaliacao-fisica/medidas-comparar-avaliacao/medidas-comparar-avaliacao.component';
import { DadosCompararAvaliacaoComponent } from './aluno/comparar-avaliacao-fisica/dados-comparar-avaliacao/dados-comparar-avaliacao.component';
import { DashboardTreinadorComponent } from './treinador/dashboard-treinador/dashboard-treinador.component';
import { AgendamentosDesafiosComponent } from './treinador/dashboard-treinador/agendamentos-desafios/agendamentos-desafios.component';
import { MeusExerciciosComponent } from './treinador/dashboard-treinador/meus-exercicios/meus-exercicios.component';
import { GraficoComponent } from './treinador/dashboard-treinador/grafico/grafico.component';
import { PlanosTreinoComponent } from './treinador/dashboard-treinador/planos-treino/planos-treino.component';
import { AgendamentosBreafComponent } from './treinador/dashboard-treinador/agendamentos-breaf/agendamentos-breaf.component';
import { DesafiosDecorrerBreafComponent } from './treinador/dashboard-treinador/desafios-decorrer-breaf/desafios-decorrer-breaf.component';
import { VerPublicacoesCardComponent } from './treinador/dashboard-treinador/ver-publicacoes-card/ver-publicacoes-card.component';
import { VerColocacoesComponent } from './treinador/dashboard-treinador/ver-colocacoes/ver-colocacoes.component';
import { MedidasCompararAvaliacao2Component } from './aluno/comparar-avaliacao-fisica/medidas-comparar-avaliacao2/medidas-comparar-avaliacao2.component';
import { DadosCompararAvaliacao2Component } from './aluno/comparar-avaliacao-fisica/dados-comparar-avaliacao2/dados-comparar-avaliacao2.component';
import { VerAvaliacoesDiasComponent } from './aluno/ver-avaliacoes-dias/ver-avaliacoes-dias.component';
import { AvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/avaliacoes-realizadas/avaliacoes-realizadas.component';
import { MedidasAvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/medidas-avaliacoes-realizadas/medidas-avaliacoes-realizadas.component';
import { DadosAvaliacoesRealizadasComponent } from './aluno/ver-avaliacoes-dias/dados-avaliacoes-realizadas/dados-avaliacoes-realizadas.component';
import { VerPublicacaoComponent } from './ver-publicacao/ver-publicacao.component';
import { NovaPublicacaoComponent } from './ver-publicacao/nova-publicacao/nova-publicacao.component';
import { PublicacaoComponent } from './ver-publicacao/publicacao/publicacao.component';
import { UtilizadoresLogadosComponent } from './ver-publicacao/utilizadores-logados/utilizadores-logados.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { NotificacoesAplicacaoComponent } from './notificacoes/notificacoes-aplicacao/notificacoes-aplicacao.component';
import { CriarAvaliacaoFisicaComponent } from './treinador/criar-avaliacao-fisica/criar-avaliacao-fisica.component';
import { CriarMedidasComponent } from './treinador/criar-avaliacao-fisica/criar-medidas/criar-medidas.component';
import { IdentificacaoAlunoComponent } from './treinador/criar-avaliacao-fisica/identificacao-aluno/identificacao-aluno.component';
import { GestaoExercicioComponent } from './treinador/gestao-exercicio/gestao-exercicio.component';
import { ExerciciosSelecionadosComponent } from './treinador/gestao-exercicio/exercicios-selecionados/exercicios-selecionados.component';
import { SelecionarExerciciosComponent } from './treinador/gestao-exercicio/selecionar-exercicios/selecionar-exercicios.component';
import { CalendarioDesafioAvaliacaoComponent } from './calendario-desafio-avaliacao/calendario-desafio-avaliacao.component';

import { BotaoDesafioComponent } from './calendario-desafio-avaliacao/botao-desafio/botao-desafio.component';
import { BotaoAvaliacaoComponent } from './calendario-desafio-avaliacao/botao-avaliacao/botao-avaliacao.component';
import { CalendarioComponent } from './calendario-desafio-avaliacao/calendario/calendario.component';
import { SetaEsquerdaComponent } from './calendario-desafio-avaliacao/seta-esquerda/seta-esquerda.component';
import { SetaDireitaComponent } from './calendario-desafio-avaliacao/seta-direita/seta-direita.component';
import { EcraAlunosComponent } from './treinador/ecra-alunos/ecra-alunos.component';
import { PesquisaComponent } from './treinador/ecra-alunos/pesquisa/pesquisa.component';
import { CartoesComponent } from './treinador/ecra-alunos/cartoes/cartoes.component';
import { FooterComponent } from './footer/footer.component';

import { PostComponent } from './post/post.component';
import { FlatpickrModule } from 'angularx-flatpickr';

registerLocaleData(ptPT)

import { AgendarAvaliacaoComponentComponent } from './aluno/agendar-avaliacao-component/agendar-avaliacao-component.component';
import { DesafiosComponent } from './desafios/desafios.component';
import { InscreverDesafiosComponent } from './desafios/inscrever-desafios/inscrever-desafios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    PerfilComponent,
    PerfilOutrosComponent,
    VerAvaliacaoFisicaComponent,
    IdentificacaoAlunoAvaliacaoComponent,
    DadosAlunoAvaliacaoComponent,
    ButaoEditarAvaliacaoComponent,
    MedidasVerAvaliacaoComponent,
    CompararAvaliacaoFisicaComponent,
    MedidasCompararAvaliacaoComponent,
    DadosCompararAvaliacaoComponent,
    DashboardTreinadorComponent,
    AgendamentosDesafiosComponent,
    MeusExerciciosComponent,
    GraficoComponent,
    PlanosTreinoComponent,
    AgendamentosBreafComponent,
    DesafiosDecorrerBreafComponent,
    VerPublicacoesCardComponent,
    VerColocacoesComponent,
    MedidasCompararAvaliacao2Component,
    DadosCompararAvaliacao2Component,
    VerAvaliacoesDiasComponent,
    AvaliacoesRealizadasComponent,
    MedidasAvaliacoesRealizadasComponent,
    DadosAvaliacoesRealizadasComponent,
    VerPublicacaoComponent,
    NovaPublicacaoComponent,
    PublicacaoComponent,
    UtilizadoresLogadosComponent,
    VerColocacoesComponent,
    NotificacoesComponent,
    NotificacoesAplicacaoComponent,
    CriarAvaliacaoFisicaComponent,
    CriarMedidasComponent,
    IdentificacaoAlunoComponent,
    GestaoExercicioComponent,
    ExerciciosSelecionadosComponent,
    SelecionarExerciciosComponent,
    CalendarioDesafioAvaliacaoComponent,
    BotaoDesafioComponent,
    BotaoAvaliacaoComponent,
    CalendarioComponent,
    SetaEsquerdaComponent,
    SetaDireitaComponent,
    EcraAlunosComponent,
    PesquisaComponent,
    CartoesComponent,
    FooterComponent,
    PostComponent,
    AgendarAvaliacaoComponentComponent,
    DesafiosComponent,
    InscreverDesafiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlatpickrModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
