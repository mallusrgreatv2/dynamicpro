console.log(`Hello world`);
function frick() {
    const doc = document.getElementById("li1");
    const img = document.getElementById("img");
    img.addEventListener("dblclick", () => {
        doc.innerHTML = "You found the button!\n(it does nothing)"
    })
}