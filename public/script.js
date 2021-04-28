const display = document.querySelector('#displaydata')
const fetchbutton = document.querySelector('#fetchdata')

fetchbutton.addEventListener('click', async event => {

try {
  const response = await fetch('/hamsters/random')
  const json = await  response.json()

  let text = JSON.stringify(json)
  display.innerHTML = text
}
catch  {
console.log("yea there's a problem");
}
})
