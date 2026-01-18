//nome do veiculo, total abastecido e km rodados
let veiculos = [
    ["Gol", 200, 120],
    ["Corsa", 168, 100],
    ["Palio", 170, 130],
    ["Onix", 220, 160]
]

let maisEconomico = ""
let menosEconomico = ""
let totalGeralAbastecido = 0
let totalKmRodados = 0
let menorConsumo = Infinity
let maiorConsumo = -Infinity

for (let i = 0; i < veiculos.length; i++) {
    let nomeVeiculo = veiculos[i][0]
    let totalAbastecido = veiculos[i][1]
    let kmRodados = veiculos[i][2]
    
    let consumoMedioUnd = kmRodados / totalAbastecido
    console.log(`O Automóvel ${nomeVeiculo} teve um consumo medio de ${consumoMedioUnd.toFixed(2)} por KM/l`)

    totalGeralAbastecido += totalAbastecido
    totalKmRodados += kmRodados

    if (consumoMedioUnd > maiorConsumo) {
        maiorConsumo = consumoMedioUnd
        maisEconomico = nomeVeiculo
    }

    
    if (consumoMedioUnd < menorConsumo) {
        menorConsumo = consumoMedioUnd
        menosEconomico = nomeVeiculo
    }


}

let consumoMedioFrota = totalKmRodados / totalGeralAbastecido

console.log(`O veículo mais econômico é o ${maisEconomico}`)
console.log(`O veículo menos econômico é o ${menosEconomico}`)
console.log(`O consumo médio geral da frota é de ${consumoMedioFrota.toFixed(2)} KM/l`)