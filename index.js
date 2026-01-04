//Quando é um repositorio recem criado
//git init
//git add . ou git add "nome do arquivo"
//git commit -m "coloque uma msg"
//git branch -M main
//git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
//git push -u origin main

//Depois do repositorio criado
//git add .
//git commit -m "msg"
//git push

function pares(numero){
    
    if (numero % 2 === 0){
        console.log(numero + " Este número é par.")
    } else {
        console.log(numero + " Este número é impar.")
    }
}

pares(98)