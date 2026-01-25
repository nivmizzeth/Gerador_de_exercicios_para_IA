class Cadastro {
    constructor(nome, idade, plano, valorMensalidade, status) {
        this.nome = nome
        this.idade = idade
        this.plano = plano
        this.valorMensalidade = valorMensalidade
        this.status = status
    }
}

function obterSituacaoAlunos(matricula) {
    let ativo = 0
    let inadimplente = 0
    let cancelado = 0

    for (const aluno of matricula) {

        const condicao  = aluno.status

        if(condicao === "Ativo") {
            ativo ++
        } else if (condicao === "Inadimplente") {
            inadimplente ++
        } else if (condicao === "Cancelado") {
            cancelado ++
        }

    }

    return {
        ativo,
        inadimplente,
        cancelado
    }

}

function calcularFaturamentoPrevisto(matricula) {
    
    let totalFaturamentoMensal = 0

    for (const cadastros of matricula) {
        
        const mensalidade = cadastros.valorMensalidade
        const situacao = cadastros.status

        if (situacao === "Ativo") {
            totalFaturamentoMensal += mensalidade
        }


    }

    return totalFaturamentoMensal
}

function criarPlanilhaAlunos(matricula) {
    
    let relatorioAlunos = []

    for (const alunos of matricula) {

        const nome =  alunos.nome
        const plano = alunos.plano
        const status = alunos.status
        const valor = alunos.valorMensalidade

        relatorioAlunos.push(`- aluno: ${nome}, plano: ${plano}, status: ${status}, valor: ${valor}`)

    }

    return relatorioAlunos
}

let controleMatriculas = [
    new Cadastro("Bruno Lima", 29, "Premium", 120, "Ativo"),
    new Cadastro("Carlos Mendes", 34, "Básico", 80, "Ativo"),
    new Cadastro("Eduardo Rocha", 41, "Premium", 120, "Inadimplente"),
    new Cadastro("Fernanda Alves", 22, "Básico", 80, "Cancelado"),
    new Cadastro("Gustavo Souza", 37, "Premium", 120, "Ativo")
]

const situacao = obterSituacaoAlunos(controleMatriculas)
const faturamento = calcularFaturamentoPrevisto(controleMatriculas)
const planilhaAlunos = criarPlanilhaAlunos(controleMatriculas)

console.log("Status atual alunos:")
console.log(`Ativos: ${situacao.ativo}\nInadimplentes: ${situacao.inadimplente}\nCancelados: ${situacao.cancelado}`)
console.log(`Faturamento previsto: ${faturamento.toFixed(2)}`)
console.log("--------------------------------")
console.log("Relatório completo alunos:")
console.log(planilhaAlunos.join("\n"))