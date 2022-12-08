var url = "https://localhost:7053//"
document.addEventListener("DOMContentLoaded",list)
function list() {
    fetch(`${url}City/GetCities`)
    .then(response=> response.json())
    .then(cities=>{
    var html= cities.map(c=>{  
       return(`
       <td>${c.Id}</td>
       <td>${c.name}</td>" 
       `)

    })
    console.log(html)
    documfent.getElementById("cities").innerHTML = html.join("\n");
   
    })
    .catch(err=> close.log(err))
}
function add() {
    let payload = {
       name: document.getElementById("name").value
    }
    fetch(`${url}City/Add`, {
        method:"POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response=> response.json())
    .then(city=> {
         console.log(city)
    })
    .catch(err=> {
        console.log(err)
    })
}

    