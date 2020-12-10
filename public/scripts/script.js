// mascara cpf
/*
function aviso() {
    console.log('CPF Inválido!');
}
const inputCpf = document.querySelector("#input-cpf");
inputCpf.addEventListener("keyup", () => {
    if(inputCpf.value.length == 3) {
        inputCpf.value += ".";
    } else if (inputCpf.value.length == 7){
        inputCpf.value += ".";
    } else if (inputCpf.value.length == 11){
        inputCpf.value += "-";
    } else if(inputCpf.value.length == 14) {
        aviso();
    }
});
*/
// INPUT DO CPF RECEBE O FOCO AO CLICAR NO BOTÃO DE LIMPAR O FORMULÁRIO
/*
const resetCliente = document.querySelector("#btn-reset-cliente");
resetCliente.addEventListener("click", () => {
    inputCpf.focus();
});
*/

// VALIDA O VALOR DIGITADO NO CAMPO DESCONTO MANUAL
const descMan = document.getElementById("desc");
const alertDesc = document.getElementById("alert-desc");
descMan.addEventListener("keyup", () => {
    if(Number(descMan.value) > 10 || descMan.value.length > 2) {
        descMan.value = "";
        descMan.style.backgroundColor = "rgba(255,0,0,.2)";
        descMan.style.borderColor = "rgba(255,0,0,.2)";
        alertDesc.style.display = "block";
    } else {
        descMan.style.backgroundColor = "#fff";
        descMan.style.borderColor = "#0066bf";
        alertDesc.style.display = "none";
    }
});

// ABRE O SITE PARA CONSULTAR A BULA
const btnBula = document.getElementById("bula");
let nomeMed = "lorem-ipsum";
btnBula.addEventListener("click", () => {
    window.open(`https://www.bulasbrasil.com.br/bula/${nomeMed}`, "_blank");
});