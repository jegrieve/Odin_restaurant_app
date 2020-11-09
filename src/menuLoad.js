const menuLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "menu";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = 
    "<p>We have a classic italian menu:</p>" +
    "<div><img id = \"lasagna\" src= \"lasagna.jpg\" width = 50%><div>$12.99 Lasagna</div></div>" +
    "<div><img id = \"spaghetti\" src= \"spaghetti.jpg\" width = 50%><div>$10.99 Spaghetti</div></div>"
    document.getElementById("content").appendChild(createDiv);
}


export {menuLoad}
