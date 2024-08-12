let input = document.querySelector(".button");
let output = document.querySelector(".main-title");
let buttonText = document.querySelector(".button-text");
let count = 1;
let one = "1.51";
let two = "3.28";
let three = "3.26";

output.innerHTML = "5.73";

input.addEventListener("click", () => {
    loading ()
    if (count === 1) {
        count++;
        setTimeout(() => {output.innerHTML = one;}, 1000)
    } else if (count === 2) {
        count++;
        setTimeout(() => {output.innerHTML = two;}, 1000)
    } else if (count === 3) {
        setTimeout(() => {output.innerHTML = three;}, 1000)
    }
}, 2000);

function loading () {
    buttonText.innerHTML = '';
    buttonText.innerHTML = "<img class=\"loading\" alt=\"\" src=\"./img/loading.png\">";
    setTimeout(() => {buttonText.innerHTML = "Check";}, 1000)
}