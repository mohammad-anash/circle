let bodyel = document.querySelector('body');

let letter = "123456789ABCDEF"
let hash = "#";

function randomcircle() {
    for (let index = 0; index < 6; index++) {
       hash += letter[Math.floor(Math.random()*letter.length)];
    }
   return hash
}


function getrandomsize(min, max){
    return Math.random() * (max - min) + min;
}

function createcircle(event) {
    let div = document.createElement('div');
    div.classList.add('circle');
    let xpos = event.clientX;
    let ypos = event.ClientY;
    let size = getrandomsize(10, 200)
    div.style.width = `${size}` / 2;
    div.style.height = `${size}` / 2;
    div.style.left = `${xpos}px`;
    div.style.top = `${ypos}px`;
    div.style.backgroundColor = randomcircle();
    bodyel.appendChild(div)
    return div
}



document.addEventListener('click', (event) => {
    createcircle(event);
    console.log('button was clicked')
})