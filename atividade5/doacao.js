var idade = 19 // menor de idade não pode doar
var doença 'não'
var peso = 80 //peso minimo 50kg
var tatuagem = 'não'
var remédio = 'não'

if (idade < 18) { 
    console.log('Não tem idade para doar.') 
}else if (doença == 'sim') { 
    console.log('não pode doar, esta doente!') 
}else if (peso < 50) {
     console.log ('abaixo do peso não pode doar')
}else if (tatuagem == 'sim') { 
    console.log ('não pode doar, você fez tatuagem recente') 
}else if (tatuagem == 'sim') {
     console.log ('nao pode doar')
 }else if (remédio == 'sim') {
     console.log ('nao pode doar')
}else { console.log ('Pode doar') }