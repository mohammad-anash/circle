let bodyel = document.querySelector('body');

let letter = "123456789ABCDEF"


function randomcircle() {
    let hash = "#";
    for (let index = 0; index < 6; index++) {
       hash += letter[Math.floor(Math.random()*letter.length)];
    }
    console.log(hash)
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
    div.style.width = `${size}`;
    div.style.height = `${size}`;
    div.style.left = `${xpos}px`;
    div.style.top = `${ypos}px`;
    div.style.backgroundColor = randomcircle();
    console.log(div)
    bodyel.appendChild(div)
    return div
}



document.addEventListener('click', (event) => {
    createcircle(event);
    console.log('button was clicked')
})