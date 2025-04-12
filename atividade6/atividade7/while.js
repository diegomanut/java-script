let cont = 10;

while ( cont >= 0) {
    console.log(`Cont vale: ${cont}`)
     cont--
     
}
//quando for usar for? R:Quando você já sabe quantas vezes quer repetir algo.

//Quando usae while?R: Quando voçê não saber quantas vrzes repetir algo e esperar algo 

let senha = Number.parseInt (prompt ('Digite sua senha'))

while (senha !== 1234){
    alert(`Senha Incorreta`)
    senha = Number.parseInt(prompt('Digite sua senha:'))
}

alert( `Acesso autorizado`)






