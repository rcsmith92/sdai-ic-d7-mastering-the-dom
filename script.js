// Write your JavaScipt code below this line. 
const mainTitle = document.getElementById("main-title")
mainTitle.textContent = "Welcome to Our Adoption Center"

const description = document.getElementById("description")
description.textContent = "Find your purrfect companion!"

const cat1Button = document.getElementById('cat-1-button')
cat1Button.addEventListener('click', () => {
  const cat = document.getElementById("cat-1")
  alert("Congrats on adopting your new friend!")
  cat.remove()
})

const cat2Button = document.getElementById('cat-2-button')
cat2Button.addEventListener('click', () => {
    const cat = document.getElementById("cat-2")
    alert("Congrats on adopting your new friend!")
    cat.remove()
})
 

  const cat3Button = document.getElementById('cat-3-button')
  cat3Button.addEventListener('click', () => {
    const cat = document.getElementById("cat-3")
    alert("Congrats on adopting your new friend!")
    cat.remove()
  })
   