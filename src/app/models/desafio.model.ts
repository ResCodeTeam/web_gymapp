export interface Desafio {
    agendamento_id: string,
    uid: string,
    data_agendamento: Date,
    isAceite: boolean,
    desafio_id: string,
    ginasio_id: string,
    isDeleted: boolean,
    estado: boolean
}

export interface DesafioAgendado {
    desafio_id: string,
    criador_id: string,
    nome: string,
    modalidade_id: string,
    data_inicio: Date,
    data_fim: Date,
    recompensa: number,
    isEncerrado: boolean,
    ginasio_id: string,
    descricao: string,
    isDeleted: boolean
}

