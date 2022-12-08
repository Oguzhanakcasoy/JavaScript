const drinkform = document.getElementById("drinkform")
drinkform.addEventListener("submit", submitForm)

function submitForm(e){
    console.log(e.target.children)
    console.log('form submitted')
    e.preventDefault();
}