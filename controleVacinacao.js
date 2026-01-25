const controleDeVacinacao = [
    {nome: "Ana Souza", idade: 28, dosesTomadas: 2, dosesNescessarias: 2},
    {nome: "Carlos Lima", idade: 35, dosesTomadas: 1, dosesNescessarias: 3},
    {nome: "Fernada Alves", idade: 42, dosesTomadas: 3, dosesNescessarias: 3},
    {nome: "Ricardo Mendes", idade: 30, dosesTomadas: 0, dosesNescessarias: 2},
    {nome: "Juliana Rocha", idade: 25, dosesTomadas: 2, dosesNescessarias: 3}
]

function analisarDadosVacinacao(tabela) {

    let dosesCompletas = 0
    let tabelaVacinacao = []
    let situacao = ""
    
    for (const paciente of tabela) {

        const nome = paciente.nome
        const dosesTomadas = paciente.dosesTomadas
        const dosesNescessarias = paciente.dosesNescessarias

        if (dosesTomadas === dosesNescessarias) {
            situacao = "Esquema Completo"
            dosesCompletas ++
        } else if (dosesTomadas > 0 && dosesTomadas < dosesNescessarias) {
            situacao = "Vacinação em andamento"
        } else if (dosesTomadas === 0) {
            situacao = "Não iniciou vacinação"
        }

        tabelaVacinacao.push(`- ${nome}: ${situacao}`)
    }

    return {
        tabelaVacinacao,
        dosesCompletas
    }
}

const cartaoVacinacao = analisarDadosVacinacao(controleDeVacinacao)

console.log(`Situação Pacientes:\n${cartaoVacinacao.tabelaVacinacao.join("\n")}`)
console.log(`\nPacientes com esquema completo: ${cartaoVacinacao.dosesCompletas}`)