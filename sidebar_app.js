


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

function openPage(pageName) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  console.log(pageName);
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function test(pageName){
  let user=document.getElementById("user").value;
  let pass=document.getElementById("pass").value;
  if (user=="gh" && pass=="gh") {
      openPage(pageName);
      user="none";
      pass="none";
     
  }else{
    alert("please insert a valid username and password")
  }

}
function submitt(text_to_change,input_text){
  document.getElementById(text_to_change).innerHTML=document.getElementById(input_text).value;
  console.log("ana");
  if(input_text="skills"){
    document.getElementById(text_to_change).value=document.getElementById(input_text).value;
  }
}
function submitt_skill(){
  const skills=["HTML","CSS","JavaScript","PHP","MySQL"];
  let i, tehnic_skills, tehnic_skills1;
  tehnic_skills=document.getElementsByClassName("tehnicskills")
  tehnic_skills1=document.getElementById('skills')
  for (i = 0; i < tehnic_skills.length; i++){
    let valuer = prompt(skills[i],"0--100%");
    tehnic_skills[i].value=valuer;
    console.log(tehnic_skills[i].value);
    
    
    console.log(valuer);

  }
}