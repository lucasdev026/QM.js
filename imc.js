function calcularIMC(){
    
// Entrada de Dados
let valorAltura = document.getElementById("altura").value;
let valorPeso = document.getElementById("peso").value;

// Processamento
let valorIMC = (valorAltura * valorAltura) / valorPeso;
let valorFinal = valorAltura / valorPeso;

//Saída
document.getElementById("resultado").textContent = valorFinal = valorIMC;


}



