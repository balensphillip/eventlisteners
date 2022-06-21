const changeText = () =>{
  let p = document.querySelector('p')
  p.textContent = "i changed because of the eventlistener"
  p.style.border = "3px dotted yellowgreen"
}

//listening for the click event
let button = document.querySelector('button')
// for callback functions that are used as arguments we don't put brackets just like changetext.  
button.addEventListener('click', changeText)

function changeText2(){
    let button= document.getElementById('balens')
    button.style.border = "3px solid purple"
}

