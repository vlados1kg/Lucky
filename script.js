let input = document.querySelector(".button");
let output = document.querySelector(".main-title");
let count = 1;
let one = "1.54";
let two = "2.76";
let three = "15.02";

output.innerHTML = "5.73";

input.addEventListener("click", () => {
    if (count === 1) {
        count++;
        setTimeout(() => {output.innerHTML = one;}, 1000)
    } else if (count === 2) {
        count++;
        setTimeout(() => {output.innerHTML = two;}, 1000)
    } else if (count === 3) {
        setTimeout(() => {output.innerHTML = three;}, 1000)
    }
}, 2000)