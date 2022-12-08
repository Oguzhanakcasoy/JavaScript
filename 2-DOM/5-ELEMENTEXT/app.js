//document.getElementById("txt").innerHTML="Merhaba"
//var el = document.getElementById("txt").textContent = "Merhaba"
//var el = document.getElementById("txt").textContent="Merhaba"
//var el = document.getElementById("Mavi").innerHTML="Masmavi"
//var el = document.getElementById("Mavi").textContent="Masmavi"
//var el = document.getElementById("Mavi")
var el = document.getElementById("Mavi").children[0]
//el.innerHTML = "Masmavi";
el.setAttribute("style" , "color:red")
el.innerHTML = "Kıpkırmızı"
console.log(el)