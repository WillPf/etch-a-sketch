const containerWidth = 900;
let numOfSquares = 50;

const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const colorInput = document.querySelector(".colorInput");

let color = colorInput.value;

colorInput.addEventListener("change", () => color = colorInput.value)

container.addEventListener("mouseover", (e) => {
    e.target.style.cssText += `background-color: ${color}`;
});

button.addEventListener("click", () => {
    numOfSquares = prompt("How many squares do you want?");
    if (numOfSquares > 100) numOfSquares = 100;
    generateGrid(numOfSquares);
});

function generateGrid(n) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let divSize = containerWidth / n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.style.cssText = `width: ${divSize}px; height: ${divSize}px`;
            container.appendChild(div);
        }
    }
}
generateGrid(numOfSquares);