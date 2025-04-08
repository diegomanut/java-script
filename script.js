/* alert('Olá mundo!');
console.log('Olá Mundo');

let nome = prompt('Qual e seu nome?');

alert(`seja bem vindo! ${nome}`);

console.log(`Seja bem Vindo! ${nome}`) */
/* 

function alterar(){ document.getElementById('paragrafo')

};
 */
 function alterar(){ let p =document.getElementById ('paragrafo').innerText= 'Novo Texto'; //innerText e innerHTML //
 p.innerHTML= '<strong>Novo<strong>Texto';

 p.style.backgroundColor='red';
 }

function acender(){ document.getElementById('imglamp').src='imagens/pic_bulbon.gif'}


function apagar(){ document.getElementById('imglamp').src='imagens/pic_bulboff.gif'}
