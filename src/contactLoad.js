const contactLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "contact";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = 
    "<p>We are located at 1111 Spaghetti Street.</p>" +
    "<div>Give us a call anytime at 123-123-1234</div>"
    document.getElementById("content").appendChild(createDiv);
}


export {contactLoad}