// MASCARA DOS CAMPOS
const inputCpf = document.querySelector("#inputCpf");
const inputName = document.querySelector("#inputName");
const inputDataNasc = document.querySelector("#inputDataNasc");
const inputCep = document.querySelector("#inputCep");
const inputLog = document.querySelector("#inputLog");
const inputNumber = document.querySelector("#inputNumber");
const inputBairro = document.querySelector("#inputBairro");
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
        inputName.focus();
    }
});

inputCep.addEventListener("keyup", () => {
    if(inputCep.value.length == 2) {
        inputCep.value += ".";
    } else if(inputCep.value.length == 6) {
        inputCep.value += "-";
    }
    if(inputCep.value.length == 10) {
        inputLog.focus();
    }
});

inputNumber.addEventListener("keyup", () => {
    if(inputNumber.value.length == 4) {
        inputBairro.focus();
    } else if(inputNumber.value.length > 4) {
        inputNumber.value = "";
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