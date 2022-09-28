


document.getElementById("openclose").addEventListener("click", contorclick); 
let contor=0;
function contorclick(){
   contor++;

}
function openclose() {
  
  if ((document.getElementById("sidebar").style.width==" " || "0px") && (contor%2)==0) {
    openNav();
    
    
    
  } 
  if ((document.getElementById("sidebar").style.width  == "210px") && (contor%2)==1) {
    closeNav();
    
    
  
  }
    
  
}
function openNav() {
  document.getElementById("sidebar").style.width = "210px";
  document.getElementById("content").style.marginLeft = "210px";
    
  }
  
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("content").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
  }










function openPage(pageName,elmnt) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  console.log(tabcontent.length);
  console.log(pageName);
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();