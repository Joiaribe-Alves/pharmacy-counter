var strData = "28/12/2020";
var partesData = strData.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
if(data > new Date()) {
    console.log("Data de nascimento não pode ser maior que tada atual")

    console.log(partesData);
}