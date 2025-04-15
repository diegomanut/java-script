
function resultado() {
    let numero = document.getElementById
        ("calculo").value;




    for (let i = 0; i <= 10; i++) { 
        console.log(numero * i) 
        /* Texto.innerText ` <p> Atabuade de ${i} é
        <p/>`; */
       
        
       resposta.innerHTML += ` <p>  ${numero} 
 X ${numero * i} =  ${i} </p>`;
 

    }
}