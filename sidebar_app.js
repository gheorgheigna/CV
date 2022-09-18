function openNav() {
    document.getElementById("sidebar").style.width = "150px";
    document.getElementById("content").style.marginLeft = "150px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }