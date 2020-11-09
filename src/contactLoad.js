const contactLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "contact";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = "<p>test3</p>"
    document.getElementById("content").appendChild(createDiv);
}


export {contactLoad}