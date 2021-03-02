const inputCpf = document.querySelector("#inputCpf");

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