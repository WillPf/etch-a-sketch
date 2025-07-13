const containerWidth = 900;
let numOfSquares = 50;
let divSize = containerWidth / numOfSquares;


const container = document.querySelector(".container");
for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
        let div = document.createElement("div");
        div.style.cssText = `width: ${divSize}px; height: ${divSize}px`;
        container.appendChild(div);
    }
}
container.addEventListener("mouseover", (e) => {
    e.target.style.cssText += "background-color: #8888ff";
})