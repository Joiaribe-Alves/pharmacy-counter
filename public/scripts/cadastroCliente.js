const slider = document.querySelector("#formCadCliente");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
let currentMargin = 0;

btnNext.addEventListener("click", () => {
    currentMargin += 100;
    if(currentMargin < 201) {
        slider.style.marginLeft = `-${currentMargin}%`;
        btnPrev.style.visibility = "visible";
    }
    if(currentMargin == 200) {
       btnNext.style.visibility = "hidden";
    }
});

btnPrev.addEventListener("click", () => {
    currentMargin -= 100;
    if(currentMargin < 200) {
        slider.style.marginLeft = `-${currentMargin}%`;
        btnNext.style.visibility = "visible";
    }
    if(currentMargin == 0) {
       btnPrev.style.visibility = "hidden";
    }
});

// MASCARA DOS CAMPOS
const inputCpf = document.querySelector("#inputCpf");
const inputDataNasc = document.querySelector("#inputDataNasc");

inputCpf.addEventListener("keyup", () => {
    if(inputCpf.value.length == 3) {
        inputCpf.value += ".";
    } else if(inputCpf.value.length == 7) {
        inputCpf.value += ".";
    } else if(inputCpf.value.length == 11) {
        inputCpf.value += "-";
    }
    if(inputCpf.value.length == 14) {
        inputDataNasc.focus();
    }
});

inputDataNasc.addEventListener("keyup", () => {
    if(inputDataNasc.value.length == 2) {
        inputDataNasc.value += "/";
    } else if(inputDataNasc.value.length == 5) {
        inputDataNasc.value += "/";
    }
});