const containerText = document.getElementById("seeText")
const textArea = document.getElementById("text")
const buttonMayuscula = document.getElementById("mayuscula")
const buttonMinuscula = document.getElementById("minuscula")


textArea.addEventListener("keyup", (e)=>{

    containerText.innerText = e.target.value
})

buttonMayuscula.addEventListener("click", ()=>{
    let upperCase = containerText.textContent.toUpperCase()
    containerText.innerText = upperCase
    
})

buttonMinuscula.addEventListener("click", ()=>{
    let lowerCase = containerText.textContent.toLowerCase()
    containerText.innerText = lowerCase
    
})