(()=>{"use strict";(()=>{const e=document.createElement("div");e.id="home",e.classList.add("tabcontent"),e.innerHTML="<p>test</p>",document.getElementById("content").appendChild(e)})(),(()=>{const e=document.createElement("div");e.id="menu",e.classList.add("tabcontent"),e.innerHTML="<p>test2</p>",document.getElementById("content").appendChild(e)})(),(()=>{const e=document.createElement("div");e.id="contact",e.classList.add("tabcontent"),e.innerHTML="<p>test3</p>",document.getElementById("content").appendChild(e)})();const e=(e,t,n)=>{let c,d,o;for(d=document.getElementsByClassName("tabcontent"),c=0;c<d.length;c++)d[c].style.display="none";for(o=document.getElementsByClassName("tablink"),c=0;c<o.length;c++)o[c].style.backgroundColor="";document.getElementById(e).style.display="block",t.style.backgroundColor=n};document.getElementById("btn-home").addEventListener("click",(function(t){e("home",this,"red")})),document.getElementById("btn-menu").addEventListener("click",(function(t){e("menu",this,"green")})),document.getElementById("btn-contact").addEventListener("click",(function(t){e("contact",this,"blue")})),document.getElementById("btn-home").click()})();
//# sourceMappingURL=main.js.map