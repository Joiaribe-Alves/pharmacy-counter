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

// ABRE E FECHA O MENU
const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", () => {
    if(menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

// ABRE O MODAL CADASTRO
const btnNewCad = document.querySelector("#btnNewCad");
btnNewCad.addEventListener("click", () => {
    modal.style.top = "10%";
    modal.style.opacity = "1";
    modal.style.zIndex = "5";
});

// FECHA O MODAL
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector("#btnCloseModal");
btnCloseModal.addEventListener("click", () => {
    modal.style.top = "-10%";
    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
});

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