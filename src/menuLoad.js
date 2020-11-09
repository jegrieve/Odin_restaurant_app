const menuLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "menu";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = "<p>test2</p>"
    document.getElementById("content").appendChild(createDiv);
}


export {menuLoad}
