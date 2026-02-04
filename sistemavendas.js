const LIMITE_ESTOQUE_MINIMO = 10

class Produto {
    constructor(nome, estoque) {
        this.nome = nome
        this.estoque = estoque
    }

    subtrairEstoque(vendaTotalSemana) {
        let total = vendaTotalSemana.calcularVendasDaSemana()
        this.estoque = this.estoque - total
        return this.estoque
    }

    verificarEstoque() {
        return this.estoque < LIMITE_ESTOQUE_MINIMO
    }
}

class Venda {
    constructor(nome, unidadesVendidas) {
        this.nome = nome
        this.unidadesVendidas = unidadesVendidas
    }

    calcularVendasDaSemana() {
        let totalVendido = 0
        for (const venda of this.unidadesVendidas) {
            totalVendido += venda
        }
        
        return totalVendido
    }

}

function analisarEstoque(reserva, listaVendas) {

    let estoqueFinal = []
    let estoqueBaixo = []

    for (let i = 0; i < reserva.length; i++) {

        const produto = reserva[i]
        const nome = produto.nome
        const estoqueAtual = produto.subtrairEstoque(listaVendas[i])
        const poucoEstoque = produto.verificarEstoque()

        estoqueFinal.push(`${nome}: estoque atual: ${estoqueAtual}.`)

        if (poucoEstoque) {
            estoqueBaixo.push(nome)
        }
    }
    return {
        estoqueFinal,
        estoqueBaixo
    }

}

function analiseDeVendas(vendidos) {

    let totalPorProduto = []
    let totalGeralVendido = 0
    let maisVendido = -Infinity
    let produtoMaisVendido = ""

    for (const venda of vendidos) {
        const nome = venda.nome
        const quantidade = venda.calcularVendasDaSemana()

        totalPorProduto.push(`${nome}: ${quantidade} vendidos está semana` )

        totalGeralVendido += quantidade

        if (quantidade > maisVendido) {
            maisVendido = quantidade
            produtoMaisVendido = nome
        }
    }
    return {
        totalPorProduto,
        totalGeralVendido,
        produtoMaisVendido
    }
}

let produtos = [
    new Produto("Notebook", 15),
    new Produto("Smartphone", 25),
    new Produto("Tablet", 18),
    new Produto("Fone de Ouvido", 40)
]

let vendas = [
    new Venda("Notebook", [2, 1, 0, 3, 2, 1, 4]),
    new Venda("Smartphone", [3, 5, 2, 4, 6, 3, 2]),
    new Venda("Tablet", [1, 0, 2, 1, 1, 3, 2]),
    new Venda("Fone de Ouvido", [5, 4, 6, 3, 2, 7, 5])
]

const relatorioVendas = analiseDeVendas(vendas)
const relatorioEstoque = analisarEstoque(produtos, vendas)

console.log("Totais de vendas Semanais:")
console.log(relatorioVendas.totalPorProduto.join("\n"))
console.log("\nEstoques atualizados:")
console.log(relatorioEstoque.estoqueFinal.join("\n"))
console.log(`\nProdutos com estoque baixo: ${relatorioEstoque.estoqueBaixo.join(", ")}`)
console.log(`Total de vendas da semana: ${relatorioVendas.totalGeralVendido}`)
console.log(`Produto mais vendido da semana: ${relatorioVendas.produtoMaisVendido}`)