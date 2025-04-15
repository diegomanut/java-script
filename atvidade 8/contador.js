let inicio = 0
let fim = 20
let passo = 3


if (passo <= 0){resultado.innerHtml = `
    O passo não pode ser zero ou negativo.`
}else{ for ( let cont = inicio; cont <= fim; cont += passo){
    if (cont + passo <= fim) resultado.innerHtml +=`${cont}`
    else (cont + passo <= fim) resultado.innerHtml +=`${cont}`
}

}



    for (let cont = inicio; cont <= fim;  cont += passo) 
        resulado.innerHtml = `${con} `;
