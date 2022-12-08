drinktable = document.querySelector(".table")
input = document.getElementById("input")
drinktable.addEventListener("click" ,log)
input.addEventListener("click",log)

function log(e) {
  console.log(e.target.value)
}

console.log(drinktable)