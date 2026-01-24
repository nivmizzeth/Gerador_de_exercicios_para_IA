



class cadastro {
    constructor(nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    cadastrar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} sou do sexo ${this.sexo}`)
    }
}

let pessoa1 = new cadastro("Leonardo", 40, "masculino")
let pessoa2 = new cadastro("Juliana", 33, "feminino")
let pessoa3 = new cadastro("Ricardo", 22,"masculino")

pessoa1.cadastrar()