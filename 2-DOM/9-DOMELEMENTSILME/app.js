const drinklist = document.querySelector("ul.list-group")
const drinks = document.querySelectorAll("li.list-group-item")

drinks[2].remove()
drinks[3].remove()
drinks[4].remove()
drinklist.removeChild(drinklist.lastElementChild)
    drinklist.removeChild(drinks[0])

console.log(drinklist)

//