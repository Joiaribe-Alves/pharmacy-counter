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
const bgMenuOpen = document.querySelector("#bg-menu-open");

btnMenu.addEventListener("click", () => {
    if(menu.style.display == "none") {
        menu.style.display = "flex";
        bgMenuOpen.style.display = "block";
    } else {
        menu.style.display = "none";
        bgMenuOpen.style.display = "none";
    }
});

menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
    bgMenuOpen.style.display = "none";
})

// ZOOM NA IMAGEM DO PRODUTO AO PASSAR O MOUSE EM CIMA
const image = document.querySelector("#currentImg");
image.addEventListener("mousemove", function(e) {
    let width = image.offsetWidth;
    let height = image.offsetHeight;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    let bgPosX = (mouseX / width * 100);
    let bgPosY = (mouseY / height * 100);

    image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});

image.addEventListener("mouseleave", () => {
    image.style.backgroundPosition = "center";
});

// VALIDA O VALOR DIGITADO NO CAMPO DESCONTO MANUAL
/*
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
*/

// ABRE O SITE PARA CONSULTAR A BULA
const btnBula = document.getElementById("btnBula");
btnBula.addEventListener("click", () => {
    window.open(`https://www.bulasbrasil.com.br/bula/`, "_blank");
    console.log("...")
});