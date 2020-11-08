const pageLoad = () => {
    const content = document.getElementById("content");
    const pageTitle = document.createElement("h1");
    pageTitle.innerText = "Mario's Spaghetti Restaurant";
    content.appendChild(pageTitle);
    const restImg = document.createElement("img")
    restImg.src = "spaghetti.jpg"
    content.appendChild(restImg);
    const restInfo = document.createElement("p");
    restInfo.innerText = "Best spaghetti in town! Better than Mom's spaghetti."
    content.appendChild(restInfo);
  };
  
  export {pageLoad}