const homeLoad = () => {
    const createDiv = document.createElement("div");
    createDiv.id = "home";
    createDiv.classList.add("tabcontent");
    createDiv.innerHTML = 
    "<h1>Mario's Spaghetti Factory</h1>"+
        "<p>Come eat at Mario's Spaghetti factory!</p>"+
        "<img src=\"spaghetti.jpg\"></img>"
    document.getElementById("content").appendChild(createDiv);
}


export {homeLoad}
