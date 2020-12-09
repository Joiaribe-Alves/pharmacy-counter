// mascara cpf
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

// INPUT DO CPF RECEBE O FOCO AO CLICAR NO BOTÃO DE LIMPAR O FORMULÁRIO
const resetCliente = document.querySelector("#btn-reset-cliente");
resetCliente.addEventListener("click", () => {
    inputCpf.focus();
});