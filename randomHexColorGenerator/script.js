// let color = Math.random();
// convert into base 16
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

const generate = document.querySelector(".generate");
const hex = document.querySelector(".color");

const generateHexColor = () => {
    document.body.style.backgroundColor = "#" + Math.random().toString(16).substring(2, 8);
    hex.innerHTML = "#" + Math.random().toString(16).substring(2, 8);
}

generate.addEventListener("click", generateHexColor);

generateHexColor();