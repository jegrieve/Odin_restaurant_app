// import your function
// import {pageLoad} from './pageLoad';
import {homeLoad} from './homeLoad';
import {menuLoad} from './menuLoad';
import {contactLoad} from './contactLoad';


homeLoad();
menuLoad();
contactLoad();

const openPage = (pageName, elmnt, color) => {
    //Hide divs
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the background color of buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    // Shows chosen div
    document.getElementById(pageName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  

document.getElementById("btn-home").addEventListener("click", function(e) {
    openPage("home", this, "grey");
});
document.getElementById("btn-menu").addEventListener("click", function(e) {
    openPage("menu", this, "grey");
});
document.getElementById("btn-contact").addEventListener("click", function (e) {
    openPage("contact", this, "grey");
});
document.getElementById("btn-home").click();