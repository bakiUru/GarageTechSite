const LettersPhrase = "El soy Yo el que te escribe canciones soy Yo"

const letterSpace = document.querySelector(".is-hidden")

console.log(letterSpace)
let phraseByLetter = LettersPhrase.split('')
htmlLettersContent = ''
console.log(phraseByLetter)
phraseByLetter.forEach(letter =>{
    letterSpace.innerHTML+=`<i class="out">${letter}</i>`

})
console.log(letterSpace)
letterSpace.childNodes.forEach((letterElement, index)=>{
    setTimeout(()=>letterElement.setAttribute('class', 'in'),index * 50)
    
}) 