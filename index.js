
const hiddenContent  = window.document.querySelector('.prediction');
const result = window.document.querySelector('.result');

function revealContent() {
    if (!hiddenContent.classList.contains("result")) {
        hiddenContent.classList.add('result')
    }
    else{
        console.log("The text is already revealed")
    }
}
let button1 = window.document.getElementsByClassName('btn')[0]; 
button1.addEventListener('click', revealContent);


function hideContent() {
    if (hiddenContent.classList.contains("result")) {
        hiddenContent.classList.remove('result')
    }
    else{
        console.log("The result is now hidden")
    }
}
let button2 = window.document.getElementsByClassName('btn')[1]; 
button2.addEventListener('click', hideContent);
