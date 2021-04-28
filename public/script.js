const display = document.querySelector('#displaydata')
const fetchbutton = document.querySelector('#fetchdata')

fetchbutton.addEventListener('click', async event => {
  // console.log("test for button");
try {
  const response = await fetch('/hamsters/51')
  const json = await  response.json()

  let text = JSON.stringify(json)
  display.innerHTML = text
}
catch  {
console.log("yea there's a problem");
}


})
fetchidbutton.addEventListener('click', async event => {
  // console.log("test for button");
  const idtext = document.getElementById("idtextfrominput")
  try {

  }
  catch {
    console.log("error at catch in script.js");
  }
  console.log(idtext);

// try {
//   const response = await fetch('/hamsters/:' + idtext)
//   const json = await  response.json()
//
//   let text = JSON.stringify(json)
//   display.innerHTML = text
// }
// catch  {
// console.log("yea there's a problem");
// }


})
