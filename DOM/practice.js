const header2 = document.createElement("h1");
header2.appendChild(document.createTextNode("YAY!"));
const header = document.querySelector("#header");
header.addEventListener("click",function(){
  header.firstChild = "<h1>hihi</h1>";
});
