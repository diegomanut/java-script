

function maior() {
let num1 = document.getElementById
("inputPrimeiro").value;
let num2 = document.getElementById
("inputSegundo").value; 

if (num1=== num2) {  
 resultado.innerHTML =`O numeros ${num1} e ${num2} são iguais `;
}else if (num2 >= num1){ 
resultado.innerHTML = `O valor ${num2} 
    
é maior`;
}else {

resultado.innerHTML = `O valor ${num1}
 é maior.`;

} }