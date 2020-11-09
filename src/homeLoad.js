const homeLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "home";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = "<p>test</p>"
    document.getElementById("content").appendChild(createDiv);
}


export {homeLoad}
