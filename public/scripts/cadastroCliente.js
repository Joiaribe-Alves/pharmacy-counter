const slider = document.querySelector("#formCadCliente");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const btnSubmit = document.querySelector("#btnSubmit");
let currentMargin = 0;

btnNext.addEventListener("click", () => {
    currentMargin += 100;
    if(currentMargin < 201) {
        slider.style.marginLeft = `-${currentMargin}%`;
        btnPrev.style.visibility = "visible";
    }
    if(currentMargin == 200) {
       btnNext.style.visibility = "hidden";
       btnSubmit.style.display = "block";
    }
});

btnPrev.addEventListener("click", () => {
    currentMargin -= 100;
    if(currentMargin < 200) {
        slider.style.marginLeft = `-${currentMargin}%`;
        btnNext.style.visibility = "visible";
        btnSubmit.style.display = "none";
    }
    if(currentMargin == 0) {
       btnPrev.style.visibility = "hidden";
    }
});

// MASCARA DOS CAMPOS
const inputCpf = document.querySelector("#inputCpf");
const inputDataNasc = document.querySelector("#inputDataNasc");
const inputCep = document.querySelector("#inputCep");
const inputPhoneNumber1 = document.querySelector("#inputPhoneNumber1");
const inputPhoneNumber2 = document.querySelector("#inputPhoneNumber2");
const inputEmail = document.querySelector("#inputEmail");



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

inputCep.addEventListener("keyup", () => {
    if(inputCep.value.length == 2) {
        inputCep.value += ".";
    } else if(inputCep.value.length == 6) {
        inputCep.value += "-";
    }
});

inputPhoneNumber1.addEventListener("keyup", () => {
    if(inputPhoneNumber1.value.length == 2) {
        inputPhoneNumber1.value = `(${inputPhoneNumber1.value}) 9.`;
    } else if(inputPhoneNumber1.value.length == 11) {
        inputPhoneNumber1.value += "-";
    }
    if(inputPhoneNumber1.value.length == 16) {
        inputEmail.focus();
    }
});
inputPhoneNumber2.addEventListener("keyup", () => {
    if(inputPhoneNumber2.value.length == 2) {
        inputPhoneNumber2.value = `(${inputPhoneNumber2.value}) `;
    } else if(inputPhoneNumber2.value.length == 9) {
        inputPhoneNumber2.value += "-";
    }
});