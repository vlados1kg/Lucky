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
        output.innerHTML = one;
    } else if (count === 2) {
        count++;
        output.innerHTML = two
    } else if (count === 3) {
        output.innerHTML = three;
    }
})