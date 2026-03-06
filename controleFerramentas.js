const ESTOQUE_BAIXO = 5

class Produto {
    constructor(nome, estoque, preco) {
        this.nome = nome
        this.estoque = estoque
        this.preco = preco
    }

    valorTotalProduto() {
        return this.estoque * this.preco
    }

}

function relatorioEstoque(produtos) {
    let valorTotalGeral = 0
    let valorTotalPorProduto = []
    let maiorQuantidadeEmEstoque = 0
    let produtoComMaiorEstoque = ""
    let estoqueBaixo = []

    for (const produto of produtos) {

        const nome = produto.nome
        const estoque = produto.estoque
        const valor = produto.valorTotalProduto()

        valorTotalGeral += valor

        valorTotalPorProduto.push(`Produto: ${nome} | Valor em estoque: R$ ${valor.toFixed(2)}`)

        if (estoque > maiorQuantidadeEmEstoque) {
            produtoComMaiorEstoque = nome
            maiorQuantidadeEmEstoque = estoque
        }

        if (estoque < ESTOQUE_BAIXO) {
            estoqueBaixo.push(nome)
        }

    }

    return {
        valorTotalGeral,
        valorTotalPorProduto,
        produtoComMaiorEstoque,
        estoqueBaixo
    }

}

let produtos = [
    new Produto("Furadeira", 3, 350),
    new Produto("Serra elétrica", 7, 420),
    new Produto("Parafusadeira", 2, 280),
    new Produto("Martelo", 15, 45),
    new Produto("Chave de fenda", 9, 25)
]

const relatorio = relatorioEstoque(produtos)

console.log(relatorio.valorTotalPorProduto.join("\n"))
console.log(`Valor total em estoque: R$ ${relatorio.valorTotalGeral.toFixed(2)}`)
console.log(`Produto com maior quantidade: ${relatorio.produtoComMaiorEstoque}`)
console.log(`Produtos para reposição: ${relatorio.estoqueBaixo.join(", ")}`)