


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
  const skillsnames=["HTML","CSS","JavaScript","PHP","MySQL"];
  const exp_details=["Period","Job_Name","Job_details","Competence_aquired"]
  let i, tehnic_skills;
  tehnic_skills=document.getElementsByClassName("tehnicskills")
  
  console.log(input_text);

   switch(input_text){
  case "skills":
    for (i = 0; i < tehnic_skills.length; i++){
      let valuer = prompt(skillsnames[i],"0--100%");
      tehnic_skills[i].value=valuer;
      console.log(tehnic_skills[i].value);
      
      console.log(valuer);
  
    }
   break;
  case "experience":
    for (i = 0; i < exp_details.length; i++){
    let details = prompt(exp_details[i],"get new "+exp_details[i]);
    }
   break;
  default:
    document.getElementById(text_to_change).innerHTML=document.getElementById(input_text).value;
 }



}
