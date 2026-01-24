class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    definirAtaque() {
        switch (this.tipo) {
        
            case "mago":
                return "magia"
                
            case "guerreiro":
                return "espada"
                
            case "monge":
                return "artes marciais"
                
            case "ninja":
                return "shuriken"
               
        }

    }
    
    atacar() {
        const ataque = this.definirAtaque()
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

let newHero1 = new Heroi("Lerooy", 23, "ninja")
let newHero2 = new Heroi("Sauron", 101, "mago")
let newHero3 = new Heroi("Alfred", 33, "monge")

newHero1.atacar()
newHero2.atacar()
newHero3.atacar()