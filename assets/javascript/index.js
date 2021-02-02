console.log(`Hello world`);
function dblclick() {
    const doc = document.getElementById("li1");
    const img = document.getElementById("img");
    img.addEventListener("dblclick", () => {
        doc.innerHTML = "You found the button!\n(it does nothing)"
    })
}

